import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
import { createTextInputs } from './graphql/mutations';
import {
  TextInputs 
} from './ui-components';
import { API } from 'aws-amplify';

const client = generateClient();
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchUserProfile();
    submitNewTextInputs(); // Ensure async function for mutation is called within useEffect
  }, []);

  async function fetchUserProfile() {
    try {
      const { data: profiles } = await client.models.UserProfile.list();
      setUserProfiles(profiles);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  }

  async function submitNewTextInputs() {
    try {
      const newTextInputs = await client.graphql({
        query: createTextInputs,
        variables: {
          input: {
            text: "Lorem ipsum dolor sit amet",
          },
        },
      });
      console.log("New Text Inputs created:", newTextInputs);
    } catch (error) {
      console.error("Error creating text inputs:", error);
    }
  }

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={1}>My Profile</Heading>

      <Divider />

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3">{userprofile.email}</Heading>
            </View>
          </Flex>
        ))}
      </Grid>
      <Button onClick={signOut}>Sign Out</Button>
		<TextInputs
		  onSubmit={async (fields) => {
			const inputText = fields.text.trim(); // Extract and trim text input

			try {
			  const response = await API.post('openaiApiRequest', '/openai', {
				body: { inputText }, // Pass the text input
			  });

			  console.log('Response from OpenAI:', response.result); // Handle the API response
			} catch (error) {
			  console.error('Error calling OpenAI Lambda:', error);
			}
		  }}
		/>;
    </Flex>
  );
}
