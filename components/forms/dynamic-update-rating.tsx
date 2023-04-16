import firebase from 'firebase';
import { iUser } from '../../typings';
import { generateRandomString } from '../../lib/utils';


export default function DynamicUpdateRatings({ user }: { user: iUser }) {



  const updateAllPrompts = async () => {
    try {

      

      const generateRandomStringArray = (myArraySize: number): string[] => {
        
        const randomStrings: string[] = [];

        for (let i = 0; i < myArraySize; i++) {
          randomStrings.push(generateRandomString(15));
        }

        return randomStrings;
      }
      // Get a reference to the prompts collection
      const promptsRef = firebase.firestore().collection('prompts');

      // Retrieve all documents from the prompts collection
      const snapshot = await promptsRef.get();

      // Iterate through the documents and update the author_data
      snapshot.forEach(async (doc) => {
        const arraySize = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
        // console.log(doc.id == "jgwIH6x1gR5R52wFohet")
        const docRef = promptsRef.doc(doc.id);
        await docRef.update({
          votes: generateRandomStringArray(arraySize),
          votesCount: arraySize
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={updateAllPrompts}>Update All Prompts</button>
    </>
  );
}