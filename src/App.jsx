import { useState, useEffect } from "react";
import OpenAIResponseComponent from './ui-components/OpenAIResponseComponent';
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
import { TextInputs, HeroLayout1 } from './ui-components';

Amplify.configure(outputs);

const client = generateClient();

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [aiResponse, setAIResponse] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    try {
      const { data: profiles } = await client.models.UserProfile.list();
      setUserProfiles(profiles);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  }

  async function submitNewTextInputs(inputText) {
    try {
      // Mock response for testing
      const mockResponse = {
        data: {
          choices: [
            {
              text: `Mock response for input: ${inputText}`,
            },
          ],
        },
      };
      console.log("Mock Lambda Response:", mockResponse);
      setAIResponse(mockResponse.data.choices[0].text);
    } catch (error) {
      console.error("Error calling Lambda function:", error);
      setAIResponse("Error generating response");
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
      

      <Heading level={1}>Welcome to Stegosaurus, your accounting helper.</Heading>

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
      
      
      <TextInputs
        onSubmit={(fields) => {
          const inputText = fields.text.trim();
          submitNewTextInputs(inputText);
        }}
      />
      
      <OpenAIResponseComponent response={aiResponse} />
	  <Button onClick={signOut}>Sign Out</Button>
    </Flex>
  );
}
