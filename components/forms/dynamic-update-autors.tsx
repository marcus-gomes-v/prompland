import firebase from 'firebase';
import { iUser } from '../../typings';


export default function DynamicUpdateAutors({ user }: { user: iUser }) {
  
  const authors = [
    {
      "email": "aadan.achebe@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FAadan%20Achebe.png?alt=media&token=f8a01f93-0df6-48f5-9bfb-0c8d1c41efa0",
      "name": "Aadan Achebe"
    },
    {
      "email": "Alessandro.Bego@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FAlessandro%20Bego.png?alt=media&token=8c64b626-9653-41fb-800a-a6882a2b2a36",
      "name": "Alessandro Bego"
    },
    {
      "email": "Freya.Aaberg@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FFreya%20Aaberg.png?alt=media&token=444fdd62-7d38-45e4-a7f4-3ae798526c2e",
      "name": "Freya Aaberg"
    },
    {
      "email": "Khatri.Anand@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FKhatri%20Anand.png?alt=media&token=37a19fe9-4bac-4632-ba67-cfafeaf845c9",
      "name": "Khatri Anand"
    },
    {
      "email": "Melissa.Silva@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FMelissa%20Silva.png?alt=media&token=eeda79dc-d70e-4484-8c8f-232946cf9d05",
      "name": "Melissa Silva"
    },
    {
      "email": "Page.Cooper@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FPage%20Cooper.png?alt=media&token=b0917605-397a-428b-bdd1-ad4052707a1c",
      "name": "Page Cooper"
    },
    {
      "email": "Patrick.Veiga@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FPatrick%20Veiga.png?alt=media&token=2f845822-c338-4cbb-baa2-83f5112c65e2",
      "name": "Patrick Veiga"
    },
    {
      "email": "Simon.Trudeau@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FSimon%20Trudeau.png?alt=media&token=da910159-7667-42eb-bf77-520b46ac86d7",
      "name": "Simon Trudeau"
    },
    {
      "email": "Tati.Vasquez@prompland.com",
      "image": "https://firebasestorage.googleapis.com/v0/b/promp-land.appspot.com/o/engineers%2FTati%20Vasquez.png?alt=media&token=5859da1c-9121-4119-98d1-0daeb88bb376",
      "name": "Tati Vasquez"
    }
  ]
  
  const getRandomAuthor = (): any => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    return authors[randomIndex];
  };


  const updateAllPrompts = async () => {
    try {
      // Get a reference to the prompts collection
      const promptsRef = firebase.firestore().collection('prompts');

      // Retrieve all documents from the prompts collection
      const snapshot = await promptsRef.get();

      // Iterate through the documents and update the author_data
      snapshot.forEach(async (doc) => {
        const docRef = promptsRef.doc(doc.id);
        await docRef.update({
          author_data: getRandomAuthor(),
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