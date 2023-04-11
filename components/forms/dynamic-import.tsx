import firebase from 'firebase';
import { iUser } from '../../typings';


export default function DynamicImport({ user }: { user: iUser }) {

  const allMyPrompts = [
    {
      "data": {
        "hashtag": "#writingtips #creativeprompts #writingideas #literaryinspiration #writingchallenge #creativityboost #creativewriting #storyinspiration #writingprompts",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Immerse yourself in the world of storytelling as a professional writer. 📚 From captivating novels to insightful essays, explore the infinite potential of words. Unlock your creativity and craft stories that transcend time and space. ✍️",
        "promptAreas": [
          "Hello :) Today we are going to develop a story with the help of GPT. I will provide you with some information about the process. Are you ready?",
          "This is how our Storyteller tool works: Storyteller is an AI-powered platform that generates stories from user prompts. It excels at creating immersive narratives, especially in genres like fantasy, sci-fi, and mystery. With the help of GPT, the tool can understand context, maintain consistency, and bring your imagination to life. How does Storyteller work? Storyteller is an AI writing assistant that takes user inputs through text prompts and parameters and uses a Machine Learning (ML) algorithm trained on a vast amount of literary data to produce unique stories. The tool is powered by GPT-4, an advanced text generation technique that understands context and builds upon it.",
          "Version Navigator: Storyteller regularly releases new model versions to enhance coherence, creativity, and quality. The latest model is the default, but users can switch between different versions using the --version or --v parameter or by accessing the /settings menu and selecting a model version. Different models excel at different types of narratives. Newest Model: The Storyteller V2 model is the latest and most advanced version, released on January 18th, 2023. To use this model, add the --v 2 parameter to the end of a prompt or use the /settings command and select ST Version 2. This model has improved coherence, better interpretation of natural language prompts, and supports advanced features like character development and plot twists. To enable it, type --v 2 after your prompt or select  from /settings.",
          "Basic Parameters: Plot Depth --plot <number 0-100> Adjust the complexity of the story's plot. Higher values produce more intricate narratives with multiple layers. Character Development --char <number 0-100> Influence the level of character development in the story. Higher values result in more dynamic and relatable characters. Tone --tone <positive, neutral, negative> Set the overall mood of the story. Choose between positive, neutral, or negative tones to shape the narrative.",
          "Default Values: Plot Depth | Character Development | Tone | Default Value | 50 | 50 | neutral | Range | 0-100 | 0-100 | positive, neutral, negative |",
          "Now, I want you to act as a professional writer. Use rich and descriptive language when crafting your story prompts. Consider the story's setting, character motivations, and potential plot twists. The first prompt I want you to create is a gripping tale of an aspiring writer discovering their unique gift. Take inspiration from the formatting of the example prompts, but don't copy them. Use the same format and make it your own."
        ],
        "name": "Storyteller Prompt Professional Writer",
        "color": "bg-blue-500"
      }
    },
    {
      "data": {
        "hashtag": "#NextJStips #mongodb #webdevelopment #backenddevelopment #fullstackdevelopment #webdev #nextjs",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Take your web development skills to the next level with NextJS and mongodb. 🚀 Whether you're a beginner or an experienced developer, discover how to build fast and scalable applications with ease. Unleash your creativity and build amazing projects that will leave a lasting impact. 💻",
        "promptAreas": [
          "Hello there! Are you ready to take your web development skills to the next level? Today we will explore the world of NextJS and mongodb. Let's dive in, shall we?",
          "What is NextJS?NextJS is a React-based web framework that provides a set of tools and features for building server-rendered React applications. It is designed to be scalable, performant, and easy to use, making it a popular choice for building complex web applications. With NextJS, you can easily add features like server-side rendering, automatic code splitting, and static site generation to your React applications.What is mongodb?Mongodb is a popular NoSQL database that is designed to be scalable, flexible, and easy to use. It provides a document-based data model, which makes it well-suited for handling unstructured data. With mongodb, you can easily store, retrieve, and manipulate data in a way that is both efficient and flexible.",
          "Getting started with NextJS and mongodbTo get started with NextJS and mongodb, you will need to have a basic understanding of web development and React. You will also need to have Node.js and mongodb installed on your machine. Once you have those installed, you can create a new NextJS project and add mongodb as your database. From there, you can start building your application using the tools and features provided by NextJS and mongodb.",
          "Best practices for building with NextJS and mongodbWhen building applications with NextJS and mongodb, there are a few best practices to keep in mind. First, be sure to use server-side rendering for your pages to improve performance and SEO. Next, use automatic code splitting to optimize the loading time of your application. Finally, use static site generation to create fast and scalable pages that can be easily cached by a CDN.",
          "Common pitfalls to avoidWhen working with NextJS and mongodb, there are a few common pitfalls to avoid. First, be careful not to overuse server-side rendering, as it can slow down your application if used excessively. Next, be sure to properly index your mongodb collections to ensure efficient querying. Finally, be mindful of security concerns and implement proper authentication and authorization mechanisms to protect your application from attacks.",
          "Ready to start building?Now that you have a basic understanding of NextJS and mongodb, it's time to start building! Whether you're working on a personal project or a client project, the tools and features provided by NextJS and mongodb can help you build fast and scalable applications with ease. So, go ahead and unleash your creativity! We can't wait to see what you create.",
          "Do you have any questions or concerns about building with NextJS and mongodb? Let us know in the comments below! We're here to help you take your web development skills to the next level."
        ],
        "name": "NextJS and mongodb Web Development",
        "color": "bg-blue-500"
      }
    },
    {
      "data": {
        "hashtag": "#foresthouses #architecture #homedesign #natureinspired #sustainableliving #woodlandhomes #ecofriendlyhomes #cabinlife",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Escape to the tranquility of the forest with a stunning house designed specifically for woodland living. 🌲 Whether you're seeking a cozy cabin or a spacious family home, discover how to create a nature-inspired retreat that seamlessly blends with the natural environment. Embrace sustainable living and create a space that you and your loved ones will cherish for years to come. 🏡",
        "promptAreas": [
          "Welcome to the world of forest houses! Are you ready to escape the hustle and bustle of city living and immerse yourself in the beauty of nature? Let's explore the possibilities together.",
          "Designing a house in the forestDesigning a house in the forest requires a special consideration for the natural environment. Your house should blend seamlessly with the surrounding forest, taking inspiration from the natural elements around you. Consider using locally sourced materials and designing with sustainability in mind to create a space that is both beautiful and eco-friendly.",
          "Choosing the right locationWhen choosing a location for your forest house, consider the orientation of the house and the surrounding landscape. Aim to maximize the amount of natural light and take advantage of views of the forest. Additionally, consider the slope of the land and the potential for natural hazards like floods or landslides.",
          "Building sustainablyWhen building your forest house, it's important to prioritize sustainability. Consider using materials that are locally sourced and renewable, like wood or stone. Additionally, design your house with energy efficiency in mind, using features like solar panels and a rainwater collection system.",
          "Creating a nature-inspired interiorTo truly immerse yourself in the natural environment, consider creating a nature-inspired interior for your forest house. Use natural materials like wood and stone, and incorporate elements like live plants and natural fabrics to create a space that is both cozy and calming. Additionally, consider incorporating large windows to maximize views of the forest and bring the outdoors inside.",
          "Embrace sustainable living with a forest houseIn addition to being a beautiful and calming retreat, a forest house can also be a way to embrace sustainable living. By using eco-friendly materials and designing with energy efficiency in mind, you can create a space that has a minimal impact on the natural environment. Additionally, living in a forest house can help you connect with nature and develop a deeper appreciation for the natural world.",
          "Are you ready to design your dream forest house? Whether you're seeking a cozy cabin or a spacious family home, the possibilities are endless. Let your imagination run wild and create a space that is truly unique to you and your family."
        ],
        "name": "Forest House Architecture and Design",
        "color": "bg-green-600"
      }
    },
    {
      "data": {
        "hashtag": "#competitiveresearch #marketanalysis #competitoranalysis #businessstrategy #businessplanning",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Improve your business strategy by analyzing your competitors. 🔍 Learn about their strengths and weaknesses, as well as their pricing and marketing strategies. Use this information to gain a competitive advantage and improve your own products or services. 💼 Each prompt can be used alone or in combination with others to guide your competitive research.",
        "promptAreas": [
          "Who Are My Main Competitors In The [Industry/Niche] And How Do They Compare To [My Company/Product]?",
          "What Are My Competitors' [Strengths/Weaknesses] And How Can I Use This Information To Gain A Competitive Advantage?",
          "What Kind Of [Products/Services] Do My Competitors Offer And How Do They Compare To [My Company/Product]?",
          "What Kind Of [Pricing Strategies] Do My Competitors Use And How Do They Compare To [My Company/Product]?",
          "What Kind Of [Marketing Strategies] Do My Competitors Use And How Effective Are They In [Generating Leads/Attracting Customers]?",
          "What Kind Of [Content] Do My Competitors Publish And How Can I Create Better Content To Compete With Them?",
          "What Kind Of [Social Media Presence] Do My Competitors Have And How Can I Leverage Social Media To Compete With Them?",
          "What Kind Of [Customer Service/Support] Do My Competitors Provide And How Can I Improve My Own Customer Service/Support To Compete With Them?",
          "What Kind Of [Seo Strategies] Do My Competitors Use And How Can I Improve My Own Seo To Compete With Them?",
          "What Kind Of [Partnerships/Collaborations] Do My Competitors Have And How Can I Establish Similar Relationships To Gain A Competitive Advantage?"
        ],
        "name": "Competitive Research Prompts",
        "color": "bg-blue-500"
      }
    },
    {
      "data": {
        "hashtag": "#hiringprocess #jobinterviews #humanresources #talentacquisition #recruiting #staffing",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Finding the right candidate for a job requires a thorough evaluation of their skills and qualifications. 🕵️‍♂️ Explore the key skills and qualities to look for when hiring customer service representatives, software developers, marketing managers, sales representatives, human resources managers, accountants, graphic designers, project managers, administrative assistants, and data analysts. 💼 Learn how to ask the right questions to assess a candidate's abilities and determine if they're the right fit for your team. 💻",
        "promptAreas": [
          "Imagine you're hiring a new customer service representative. What are some key skills and qualities you would look for in a candidate? What questions would you ask to assess their ability to handle customer inquiries and resolve issues?",
          "You're hiring a new software developer. What technical skills and experience are important for this position? What questions would you ask to evaluate their coding abilities and problem-solving skills?",
          "Imagine you're hiring a new marketing manager. What experience and qualifications are essential for this role? What questions would you ask to assess their understanding of your target market and their ability to develop effective marketing strategies?",
          "You're hiring a new sales representative. What traits and qualities would you look for in a candidate for this position? What questions would you ask to evaluate their communication and persuasion skills, as well as their ability to meet sales targets?",
          "Imagine you're hiring a new human resources manager. What experience and qualifications are essential for this role? What questions would you ask to assess their understanding of HR best practices and their ability to manage employee relations?",
          "You're hiring a new accountant. What technical skills and experience are important for this position? What questions would you ask to evaluate their knowledge of accounting principles and their ability to analyze financial statements?",
          "Imagine you're hiring a new graphic designer. What experience and qualifications are essential for this role? What questions would you ask to evaluate their creative abilities and their ability to work collaboratively with other team members?",
          "You're hiring a new project manager. What traits and qualities would you look for in a candidate for this position? What questions would you ask to assess their leadership and organizational skills, as well as their ability to manage deadlines and budgets?",
          "Imagine you're hiring a new administrative assistant. What skills and qualities are important for this role? What questions would you ask to evaluate their organizational abilities and their ability to handle multiple tasks and priorities?",
          "You're hiring a new data analyst. What technical skills and experience are important for this position? What questions would you ask to evaluate their ability to analyze and interpret data, as well as their experience with data visualization tools and techniques?"
        ],
        "name": "Hiring Process and Job Interviews",
        "color": "bg-yellow-500"
      }
    },
    {
      "data": {
        "hashtag": "#meetingnotes #meetingminutes #businesstranscription #summary #keytakeaways",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Efficiently summarize your meeting notes with these prompts. 📝 Whether you need to extract the key takeaways, decisions made, or solutions proposed, these prompts will help you effectively summarize your meeting and move forward with actionable next steps. 💼",
        "promptAreas": [
          "Summarize the 5 main takeaways from these meeting notes. [Copy and paste notes]",
          "Summarize the decisions made and the next steps outlined in these meeting notes. [Copy and paste notes]",
          "Summarize the key points raised, the solutions proposed, and the responsible departments in these meeting notes. [Copy and paste notes]"
        ],
        "name": "Meeting Notes Summary Prompts",
        "color": "bg-yellow-500"
      }
    },
    {
      "data": {
        "hashtag": "#salespitch #emailmarketing #productlaunch #marketingstrategy",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Crafting an effective sales email can be the difference between a potential customer and a sale. Learn how to highlight the benefits of your product or service and create a compelling call-to-action that encourages readers to take action. 💻",
        "promptAreas": [
          "Our [Product Or Service] Is The Perfect Solution For [Pain Point] That Many Of Our Customers Are Facing. It Offers [Benefit ], [Benefit 2], And [Benefit 3] That Make It A Must-Have For [Target Audience X]. Write A Sales Email That Highlights The Product/Service And Encourages Customers To Take Action.",
          "We Are Launching [Product]. It Is Designed For [Audience]. These Are Three Main Features/Benefits [Item ], [Item 2], [Item 3]. Write A Sales Email Inviting The Reader To Buy A Product At [Percentage]% Off.",
          "Generate A Sales Email For Potential Customers That Includes:",
          "GreetingHi [Recipient Name], IntroductionWe Are [Insert Your Business Name], And We Specialize In [Insert Your Product/Service Name].",
          "BenefitsOur [Insert Your Product/Service Name] Offers Several Benefits, Including [Insert Your First Benefit], [Insert Your Second Benefit], And [Insert Your Third Benefit].",
          "Call-To-Action[Insert Your Clear And Compelling Call-To-Action, Such As 'Schedule A Demo Today' Or 'Sign Up For A Free Trial'].",
          "Sense Of Urgency Or ScarcityAct Now To [Insert Your Sense Of Urgency Or Scarcity, Such As 'Take Advantage Of Our Limited-Time Offer' Or 'Join Our Exclusive Program While Spots Are Still Available'].",
          "Contact InformationIf You Have Any Questions Or Need More Information, Please Contact Us By [Insert Your Preferred Method Of Contact, Such As Phone, Email, Or Chat] At [Insert Your Team'S Email Address Or Phone Number]. Sign-OffThanks, [Insert Your Name]."
        ],
        "name": "Sales Email Writing Prompts",
        "color": "bg-yellow-500"
      }
    },
    {
      "data": {
        "hashtag": "#emailmarketing #cartabandonment #salesstrategy #copywriting #incentives",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Maximize sales and reduce cart abandonment with effective email marketing strategies. 📧 Use personalized emails to remind potential customers of the benefits of your product or service, and offer incentives to encourage them to complete their purchase. 🛍️ Learn how to craft compelling email sequences and build strong customer relationships through effective communication.",
        "promptAreas": [
          "Generate A Cart Abandonment Email For Potential Customers That Includes:",
          "GreetingHi [Recipient Name], ReminderYou Left [Insert Your Product/Service Name] In Your Cart. BenefitsOur [Insert Your Product/Service Name] Offers [Insert Your First Benefit], [Insert Your Second Benefit], And [Insert Your Third Benefit]. Call-To-ActionComplete Your Purchase And Enjoy [Insert Your Offer Or Incentive]. Contact InformationReach Out To Us By [Insert Your Preferred Method Of Contact, Such As Phone, Email, Or Chat] At [Insert Your Team'S Email Address Or Phone Number] If You Need Help. Sign-OffThanks, [Insert Your Name].",
          "Write A 3-Email Sequence For Potential Customers Who Started Purchasing [Product] But Did Not Complete Their Purchase. Use Urgency By Saying Their [Percentage]% Discount Will Expire In 48 Hours, And Use A Playful Tone Across The Emails."
        ],
        "name": "Email Marketing and Cart Abandonment",
        "color": "bg-purple-500"
      }
    },
    {
      "data": {
        "hashtag": "#competitiveresearch #marketanalysis #competitoranalysis #businessstrategy #businessplanning",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Improve your business strategy by analyzing your competitors. 🔍 Learn about their strengths and weaknesses, as well as their pricing and marketing strategies. Use this information to gain a competitive advantage and improve your own products or services. 💼",
        "promptAreas": [
          "Write A Cart Abandonment Email For Potential Customers That Encourages Them To Complete Their Purchase.",
          "Can You Draft An Email That Reminds Potential Customers About Items Left In Their Cart And Offers Incentives For Completing The Purchase?",
          "Write A Cart Abandonment Email That Highlights The Benefits Of The Products In The Abandoned Cart.",
          "Can You Compose An Email That Addresses Common Reasons For Cart Abandonment And Provides Solutions?",
          "Write A Cart Abandonment Email That Provides A Special Offer Or Discount To Incentivize The Purchase.",
          "Can You Create A Cart Abandonment Email That Emphasizes The Convenience And Security Of The Checkout Process?",
          "Write An Email That Showcases Similar Or Complementary Products That The Customer May Be Interested In.",
          "Can You Draft An Email That Provides A Time-Limited Offer To Encourage The Customer To Complete Their Purchase?",
          "Write A Cart Abandonment Email That Includes Customer Testimonials Or Reviews To Build Trust And Credibility.",
          "Can You Create An Email That Concludes By Expressing Gratitude For The Customer'S Consideration And Reiterating The Benefits Of Completing The Purchase?"
        ],
        "name": "🏆 Competitive Research Prompts 🕵️‍♀️",
        "color": "bg-blue-500"
      }
    },
    {
      "data": {
        "hashtag": "#customerwelcome #emailmarketing #customeracquisition #customerservice",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Welcome your new customers with a warm and personalized email that sets the tone for a positive relationship. 🤝 Thank them for choosing your company and let them know what they can expect from your products or services. Offer any necessary login information and provide a clear call-to-action for them to contact your customer service team with any questions or concerns. 📧 If you're welcoming new subscribers to your list, show your appreciation for their opt-in and let them know the valuable information they can expect to receive from you in the coming days. 🙌",
        "promptAreas": [
          "Write An Email To Welcome New Customers To [Describe Company].",
          "Write An Email To Welcome New Customers, Mentions Their Login Information, And Tells Them They Can Contact You With Any Questions At [Insert Customer Service Email].",
          "Write An Email That Welcomes New Subscribers To My List, Thanks Them For Opting-In And Mentions I Will Be Sending Valuable Information Over The Next Few Days."
        ],
        "name": "Customer Welcome and Subscription Emails",
        "color": "bg-purple-600"
      }
    },
    {
      "data": {
        "hashtag": "#customeronboarding #customersuccess #welcomemail #customersupport",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "🎉 Welcome new customers and make a great first impression with these onboarding email prompts! 📧 Whether you want to provide an overview of your products and services, outline the process for accessing and using them, introduce your team, or explain policies and procedures, we've got you covered. 💡 Our prompts also help you highlight the resources and tools available to new customers, encourage questions and feedback, and express your excitement and commitment to their success. 🚀",
        "promptAreas": [
          "Write A Welcome Email For New Customers That Provides An Overview Of Our Products And Services.",
          "Can You Draft An Email That Greets New Customers And Offers Support For Their Onboarding Experience?",
          "Write A Welcome Email That Outlines The Process For Accessing And Using Our Products And Services.",
          "Can You Compose An Email That Introduces The Customer To Our Team And Provides Contact Information For Any Questions Or Concerns?",
          "Write A Welcome Email That Emphasizes The Importance Of Customer Satisfaction And Our Commitment To Their Success.",
          "Can You Create An Email That Provides A Timeline Of Events And Milestones For The Customer Onboarding Process?",
          "Write An Email That Highlights The Resources And Tools Available To New Customers For A Successful Onboarding Experience.",
          "Can You Draft An Email That Explains Our Policies And Procedures For Customer Support And Billing?",
          "Write A Welcome Email That Encourages New Customers To Ask Questions And Seek Support During The Onboarding Process.",
          "Can You Create An Email That Concludes By Expressing Excitement For The New Customer'S Arrival And Reiterating Our Commitment To Their Success?"
        ],
        "name": "Customer Onboarding Emails",
        "color": "bg-purple-500"
      }
    },
    {
      "data": {
        "hashtag": "#funnelcreation #onlinemarketing #salesfunnel #conversionoptimization #digitalmarketing",
        "gptVersion": [
          "gpt4",
          "default3.5"
        ],
        "description": "Create an effective sales funnel to increase your online sales. 🚀 Learn about the steps to create a successful funnel, including lead generation, email marketing, upselling, and more. Optimize your funnel for conversions and boost your revenue. 💰",
        "promptAreas": [
          "Ok now generate a object for those prompts:",
          "What Can Be The Steps Of An Online Funnel That Sells A [Price Point] [Type Of Product] For [Niche]?",
          "Describe How Can I Sell [Product] Using An Online Funnel",
          "How Can I Improve This Funnel In Order To Increase Sales[Describe Current Funnel]"
        ],
        "name": "🚀 Sales Funnel Prompts 💰",
        "color": "bg-green-500"
      }
    },
    {
      "data": {
        "hashtag": "#onlinefunnels #salestactics #marketingstrategies #ecommerce #businessgrowth",
        "gptVersion": [
          "gpt3",
          "davinci"
        ],
        "description": "Learn how to sell your products or services using online funnels. 💻 Discover different types of funnels, best practices, and effective strategies to increase your sales and grow your business. 💸",
        "promptAreas": [
          "Can You Explain An Online Funnel To Sell [Type Of Product] In Simple Terms?",
          "What Should I Consider To Sell A [Price] [Type Of Product] Using An Online Funnel?",
          "What Is The Strategy To Sell A [Product] With Online Funnels",
          "What Are The Specific Steps To Sell A [Product] Using Online Funnels",
          "What Would Be The Best Funnel Type To Sell [Product]",
          "What Do You Think It'S Best To Sell [Product[ Using An Online FunnelOption A[Type Of Funnel] Option B[Type Of Funnel]",
          "Can You Suggest Three Different Types Of Online Funnels I Could Use To Sell [Product]?",
          "What Are Some Unique And Effective Online Funnel Ideas I Can Use To Sell [Product] To [Niche]?",
          "Can You Provide Me With Three Examples Of Online Funnels That Are Well-Suited For Selling A [Product] To [Niche]?",
          "ExampleWhat Can Be The Steps Of An Online Funnel That Sells A $2000 Mastermind For Amazon Fda Sellers?"
        ],
        "name": "🚀 Online Funnels for Sales and Growth 📈",
        "color": "bg-purple-500"
      }
    }
  ]
  

  const sendData = async (data: any) => {
    try {
        firebase
          .firestore()
          .collection('prompts')
          .add({
            author: firebase.auth().currentUser?.uid,
            author_data: {
              name: user.name,
              email: user.email,
              image: user.imageUrl
            },
            date: new Date(),
            data: data,
          })
    } catch (error) {
      console.log(error)
    }
  }

  const processPrompts = () => {
    allMyPrompts.map(data => {
      // sendData(data.data)
    })
  }

  return (
   <>
    <button onClick={processPrompts}>Process Prompts</button>
   </>
  )
}