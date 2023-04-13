import firebase from 'firebase';
import { iUser } from '../../typings';


export default function DynamicImport({ user }: { user: iUser }) {

  const allMyPrompts = [
    {
      "hashtag": "#CustomerSurveys",
      "descriptions": "Surveying Your Customers can be a challenging task, but with the right questions, you can gain valuable insights into their satisfaction levels and identify areas for improvement. This prompt group includes 4 sets of questions that can help you create effective customer surveys for your business. You can ask open-ended questions, track important metrics, and even gather ideas for new products. Use these prompts to engage with your customers and enhance their experience with your brand.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Give Me 0 Questions I Can Use To Survey My Customers And Gauge Their Satisfaction Level.",
        "Provide 20 Examples Of Open-Ended Questions To Include In A Customer Survey For [Company Type].",
        "List The Most Important Metrics To Track In A Customer Survey To Increase Customer Satisfaction And Retention.",
        "Brainstorm 20 Questions I Can Ask My Customers To See What Other Products Do They Need."
      ],
      "name": "Surveying Your Customers",
      "color": "bg-teal-500"
    },
    {
      "hashtag": "#SmsLeadGeneration",
      "descriptions": "SMS Lead Generation is an effective way to reach out to potential customers and engage with them through personalized messages. This prompt group includes 3 sets of prompts that can help you create compelling SMS messages for your lead generation campaigns. You can thank people for opting in, remind them about your upcoming event, and create a call-to-action message for your email subscribers. With these prompts, you can improve your lead generation efforts and drive more conversions. Use these SMS messages to connect with your target audience and grow your business.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Write An Sms Thanking People For Opting In And Reminding Them That Their Free Resource Is At [Url]",
        "Generate An Sms For New Leads After They Register For [Event], Reminding Them That The Main Benefit Of Attending Is [Main Benefit] And That The Bonuses For Showing Up Live Are [Bonus]",
        "Create An Sms For Email Subscribers Telling Them To [Call To Action]. Be Warm And Make It Sound Like It Was Coming From A Friend."
      ],
      "name": "Sms Lead Generation",
      "color": "bg-green-500"
    },
    {
      "hashtag": "#CompellingBlogPosts",
      "descriptions": "Writing compelling blog posts is crucial for attracting and retaining readers on your website. This prompt group includes 12 sets of prompts that can help you create engaging content for your blog. You can write articles that outline the benefits of a product or service, address common challenges faced by your target audience, analyze industry trends, and provide practical solutions to your readers. With these prompts, you can offer valuable insights, provide expert advice, and showcase your thought leadership in your niche. Use these blog post ideas to create content that resonates with your audience and helps you achieve your marketing goals.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Can You Write A [Word Count] Article About [Topic], Outlining The [Benefits] Of [Product] For [Reader]?",
        "Can You Write A Blog Post [For/Against][Subject] From The Perspective Of [Ideal Customer]. Before You Do So, State The Benefits Of Reading The Article.",
        "Can You Write A [Word Count] Word Article With A [Professional/Emotional/Exciting/Fun] Tone That Explains The Benefits Of [Topic] For [Reader]. The Article Should Start By Using The Pas Formula To Compel The Reader To Read The Whole Article, And Include A Call To Action In The Last Paragraph Mentioning [Offer].",
        "Can You Write A Blog Post About The Benefits Of [Product/Service/Idea] And How It Can Improve [Specific Area Of Life/Business]?",
        "Can You Create A Post That Outlines The Top Trends In [Industry/Niche] And Provides Actionable Insights On How To Stay Ahead Of The Game?",
        "Can You Write A Post That Addresses Common [Issue/Challenge] Faced By [Target Audience] And Offers Practical Solutions?",
        "Can You Create A Post That Highlights The Success Stories Of [Individuals/Organizations] Who Have Made A Significant Impact In Their Industry Or Community?",
        "Can You Write A Post That Provides A Comprehensive Guide On How To [Achieve Specific Goal/Overcome Specific Challenge] Using Step-By-Step Instructions?",
        "Can You Create A Post That Analyzes The [History/Current State/Future] Of [Industry/Niche] And Predicts What Changes Are Likely To Occur In The Near Future?",
        "Can You Write A Post That Offers Tips And Strategies For [Improving Specific Skill/Aspect Of Life] And Provides Real-Life Examples Of People Who Have Successfully Implemented These Strategies?",
        "Can You Create A Post That Provides An In-Depth Review Of A [Product/Service] And Offers An Honest Assessment Of Its Benefits And Drawbacks?",
        "Can You Write A Post That Addresses Common Misconceptions Or Myths About [Topic/Industry] And Provides Accurate Information To Dispel These Misconceptions?",
        "Can You Create A Post That Profiles A [Prominent Figure/Innovator] In [Industry/Niche] And Provides Insights Into Their Career Trajectory, Achievements, And Success Strategies?"
      ],
      "name": "Write Compelling Blog Posts",
      "color": "bg-yellow-500"
    },
    {
      "hashtag": "#SeoOptimization",
      "descriptions": "SEO optimization is crucial for improving the visibility of your website on search engines. This prompt group includes 15 sets of prompts that can help you optimize your website for search engines. You can generate keyword ideas, cluster them based on funnel stages, provide blog topic ideas, and write blog outlines with H2, H3, subheading, and bullet points. With these prompts, you can perform sentiment analysis, create schema markup, and generate user-friendly URLs. You can also identify target audiences and their persona details, as well as list top-ranking blogs and relevant topics related to your niche. Use these prompts to enhance your SEO efforts and drive more traffic to your website.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Generate A List Of 0 Keyword Ideas On [Topic].",
        "OptionalOnly Suggest Keywords That Have High Volume And Low To Medium Competition.",
        "OptionalCluster This List Of Keywords According To Funnel Stages Whether They Are Top Of The Funnel, Middle Of The Funnel Or Bottom Of The Funnel Keywords (Based On Previous Search).",
        "Provide A List Of Top 0 Ranking Blogs On The Keyword [Keyword]. [Mention Url].",
        "Suggest Blog Topic Ideas For [Topic] That Can Rank On Google",
        "Write A Detailed Blog Outline On [Topic] With H2, H3, Subheading, And Bullet Points.",
        "Provide A List Of Relevant Topics Related To [Topic].",
        "Who Would Be The Top 3 Audiences Most Interested Audiences On [Topic] To Target On Google?",
        "Provide 0 Long Tail Keywords Related To [Topic]. Match Each Keyword With Any Of The 4 Types Of Search Intent.",
        "Help Me Generate ‘How-To Schema Markup’ For The Following Steps On [Topic]. Pin Down Your Target Audience, Choose A Topic, Research Keywords.",
        "Help Me Write A Structured Data Markup For [Url].",
        "Help Me Perform Sentiment Analysis For The Following Content [Content].",
        "Write An Html Code For Faq Page Schema Markup For The Following Question And Answer. <Question> <Answer>.",
        "Write User-Friendly Urls For This Keyword On The Domain <Domain> For The Following Keywords - <Keywords>.",
        "List The Target Audience With Persona Details For The Keyword <Keyword>."
      ],
      "name": "SEO Optimization",
      "color": "bg-orange-500"
    },
    {
      "hashtag": "#PodcastInterviewQuestions",
      "descriptions": "Interviewing guests on your podcast can be challenging, especially when it comes to generating engaging and informative questions. This prompt group includes 5 sets of prompts that can help you generate compelling and relevant questions for your podcast interviews. You can list questions to ask a specific type of person, provide podcast titles, write an outline for your podcast script, and brainstorm questions to ask a prominent figure in your industry. These prompts can help you prepare for your interviews, ensure that you cover all the relevant topics, and keep your audience engaged. Use these prompts to take your podcast interviews to the next level.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "List 0 Questions To Ask [Type Of Person] During A Podcast About [Topic]",
        "Provide 0 Compelling And Engaging Podcast Titles About [Topic] For [Audience]",
        "Write An Outline For A Podcast Script On [Subject], And Include [Relevant Topics]",
        "What Would [Audience] Like To Know About [Guest]?",
        "Brainstorm 20 Questions I Could Ask A Prominent Figure In The World Of [Industry] About [Topic]"
      ],
      "name": "Generating Questions For Your Podcast Interview",
      "color": "bg-red-500"
    },
    {
      "hashtag": "#PodcastGuestOutreach",
      "descriptions": "Inviting guests to your podcast can be a daunting task, especially if you want to make sure that you reach out to the right people and convince them to participate. This prompt group includes 10 sets of prompts that can help you write compelling and persuasive messages to invite guests to your podcast. You can ask for warm messages, outreach messages for specific topics or industries, and persuasive messages for thought-leaders or experts. These prompts can help you craft effective messages that showcase the benefits of participating in your podcast and convince your guests to share their insights and expertise. Use these prompts to take your podcast to the next level by inviting the right guests.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Can You Come Up With A Warm Message For A Person, Inviting Them To My Podcast Called [Name Of The Podcast]? The Topic Of The Podcast Is [Topic], And The Main Benefits Of Saying Yes Are [Benefit ], [Benefit 2], [Benefit 3]. Finish Up By Saying If This Sounds Interesting, Please Let Me Know And I'Ll Send My Calendar Invite.",
        "Can You Help Me Write An Outreach Message To Invite Guests To My Podcast On [Fill In The Topic]?",
        "I Need A Persuasive Message To Invite Industry Experts To Be Guests On My Podcast. Can You Write That For Me?",
        "Can You Generate An Invitation Message To Send To Potential Podcast Guests Who Are Thought-Leaders In [Fill In The Industry]?",
        "I'M looking For A Way To Reach Out To Guests And Invite Them To My Podcast That Covers [Fill In The Niche]. Can You Help Me With That?",
        "Can You Assist Me In Writing An Outreach Message To Invite Guests To My Podcast That Focuses On [Fill In The Topic]?",
        "I Need A Compelling Message To Send To Potential Guests Inviting Them To Be Part Of My Podcast. Can You Write That For Me?",
        "Can You Help Me Write An Outreach Message That Will Convince Guests To Be On My Podcast And Share Their Expertise In [Fill In The Industry]?",
        "I'M Searching For A Way To Invite Guests To My Podcast That Explores [Fill In The Niche]. Can You Help Me With That?",
        "Can You Write An Outreach Message For Me That Will Persuade Guests To Participate In My Podcast And Share Their Unique Insights On [Fill In The Topic]?",
        "I Need An Effective Message To Send To Potential Guests To Invite Them To Be Part Of My Podcast On [Fill In The Topic]. Can You Write That For Me?"
      ],
      "name": "Podcast Guest Outreach",
      "color": "bg-pink-500"
    },
    {
      "hashtag": "#LinkedinPosts #PersonalBranding #ProfessionalNetworking #SocialMediaMarketing",
      "description": "Generate ideas for engaging and informative posts that will help you demonstrate your expertise and build your personal brand on LinkedIn.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Give Me 0 Ideas For Linkedin Posts For A [Role] Serving [Niche]",
        "What Are 5 Trending Topics For [Industry] On Linkedin?",
        "Generate 0 Different Angles For Linkedin Posts In Order To Share Information About [Topic]",
        "Tell Me 5 Ideas For Linkedin Posts That Can Help Me Demonstrate My Expertise In [Industry Or Topic] And Provide Valuable Information To [Target Audience]"
      ],
      "name": "Linkedin Posts Ideas",
      "color": "bg-purple-500"
    },
    {
      "hashtag": "#LinkedInMarketing #ContentStrategy #ProfessionalBranding #SocialMediaMarketing",
      "description": "Create an effective content plan for your LinkedIn profile with these prompts designed to help you come up with engaging and informative content ideas that will resonate with your target audience and promote your brand or services.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Create A Content Publishing Calendar With 0 Content Ideas That Cover [Topic]. Include The Publishing Date For The Months Of February 2023 And March 2023.",
        "Tell Me 0 Interesting Topics A [Role] Should Address On Linkedin To Create Awareness Of His Services.",
        "Give Me 20 Content Ideas For Linkedin A [Role] Could Use To Promote His Business.",
        "Tell Me The Top Performing Topics For [Role] On Linkedin."
      ],
      "name": "LinkedIn Content Strategy",
      "color": "bg-gray-500"
    },
    {
      "hashtag": "#LinkedinHashtags #SocialMediaMarketing #LinkedInMarketing #ContentStrategy #HashtagOptimization #OnlineVisibility #BusinessGrowth #BrandAwareness #ThoughtLeadership #SocialMediaOptimization #LinkedInPosts #EffectiveHashtags",
      "descriptions": "The Generating Linkedin Hashtags prompt group can help you optimize your LinkedIn posts for maximum visibility and engagement. By suggesting relevant and effective hashtags, these prompts can help you reach a wider audience and increase the impact of your posts. Whether you're promoting a product or service, sharing industry insights, or looking to establish yourself as a thought leader, these prompts can provide you with the right hashtags to use in your LinkedIn posts. So, if you're struggling to come up with good hashtags for your LinkedIn posts, give these prompts a try!",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Can You Suggest Some Relevant Linkedin Hashtags For A Post About [Topic/Industry]?",
        "What Are Some Popular Linkedin Hashtags That Relate To [Topic/Industry]?",
        "I'M Planning To Share A Post About [Topic/Industry] On Linkedin. Could You Generate Some Effective Hashtags To Use?",
        "I'M Looking For Popular Hashtags To Use In My Linkedin Posts Related To [Fill In The Topic]. Can You Help Me?",
        "Can You Generate Some Effective Hashtags For My Linkedin Post Promoting My [Fill In The Product/Service]?",
        "I Need Some Niche-Specific Hashtags For My Linkedin Post About [Fill In The Topic]. Can You Suggest Some?",
        "Can You Recommend Some Trending Hashtags To Use In My Linkedin Post About [Fill In The Topic]?",
        "I'M Struggling To Come Up With Good Hashtags For My Linkedin Post Promoting My [Fill In The Product/Service]. Can You Give Me Some Ideas?",
        "Can You Suggest Some Industry-Specific Hashtags For My Linkedin Post About [Fill In The Topic]?",
        "I Need Some Hashtags To Reach A Wider Audience For My Linkedin Post Promoting My [Fill In The Product/Service]. Can You Suggest Some?",
        "Can You Help Me Find Some Niche Hashtags To Use In My Linkedin Post Related To [Fill In The Topic]?",
        "I Want To Increase The Visibility Of My Linkedin Post About [Fill In The Topic]. Can You Recommend Some Effective Hashtags To Use?"
      ],
      "name": "Generating Linkedin Hashtags",
      "color": "bg-blue"
    },
    {
      "hashtag": "#TwitterThreads #TweetIdeas #SocialMediaStrategy #ContentMarketing #Engagement #AudienceInteractions",
      "descriptions": "The Writing Tweets Threads prompt group is perfect for those who want to improve their Twitter content strategy. With these prompts, you can come up with engaging and thought-provoking tweets and threads that will keep your followers interested and increase engagement. You can use these prompts to create a variety of tweets on a particular topic, provide unique and uncommon pointers, share controversial opinions, adopt an influencer or author's style, and use statistics and logical arguments to drive your point home. With these prompts, you can create compelling Twitter threads that will attract attention and drive engagement.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Write A Twitter Thread On [Topic] For [Industry].",
        "Write A Tweet On [Topic]. Give Some Unique And Uncommon Pointers.",
        "Give A Controversial Opinion On [Topic], Then Turn It Into A Twitter Thread.",
        "Tweet About [Topics] In [Influencer Or Author] Style.",
        "Create 0 Tweets About [Topic] For [Audience]. Use Statistics And Logical Arguments."
      ],
      "name": "Writing Tweets  Threads",
      "color": "bg-cyan"
    },
    {
      "hashtag": "#TwitterMarketing #SocialMediaStrategy #ContentCreation",
      "descriptions": "The Leveraging Twitter Trends prompt group is designed to help you increase engagement on Twitter by identifying and leveraging popular topics, as well as creating catchy and engaging content that resonates with your audience. With prompts like  Don't miss out on the power of Twitter - use this prompt group to create content that resonates with your audience and drives engagement!",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Write A Tweet That Will Go Viral And Increase Awareness About [Topic]. Provide 0 Suggestions.",
        "Help Me Come Up With A Catchy Headline And Engaging Content For 0 Tweets On [Topic].",
        "What Are Popular Topics On Twitter About [Topic]?",
        "What Type Of Content Receives The Most Engagement On Twitter?",
        "What Type Of Content For [Industry] Goes Viral On Twitter?"
      ],
      "name": "Leveraging Twitter Trends",
      "color": "bg-teal"
    },
    {
      "hashtag": "#TwitterMarketing #SocialMediaTips #ViralTweets #EngagementStrategies #InfluencerMarketing",
      "descriptions": "Get your tweets to go viral with the 'Getting Your Tweets To Go Viral' prompt group. Craft compelling tweets using creativity, research, and data. Optimize tweets to increase engagement and encourage shares. Learn how to tap into trends, use the right language, and appeal to your target audience. #TwitterMarketing #SocialMediaTips #ViralTweets #EngagementStrategies #InfluencerMarketing",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Write 0 Tweets With A High Chance Of Going Viral On [Niche].",
        "Optimize This Tweet To Go Viral[Copy And Paste Tweet].",
        "Tell Me 5 Characteristics Of Tweets That Go Viral About [Topic].",
        "Create An Attention-Grabbing Tweet Around [Topic].",
        "Create 3 Tweets That Will Be Shared Widely By Influencers In [Industry]. Make Sure They Appeal To [Audience] And Encourage Them To Share The Tweet."
      ],
      "name": "Getting Your Tweets To Go Viral",
      "color": "bg-green"
    },
    {
      "hashtag": "#WebinarTopics #AudienceEngagement #OnlineEvents #VirtualWorkshops #IdealClients",
      "descriptions": "The 'Topics For Webinar' prompt group provides prompts to generate ideas and content for successful webinars. Use them to attract your ideal audience and provide valuable solutions to their problems.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Suggest 0 Topics For A Webinar To Attract [Ideal Customer] To [Offer]",
        "Write 20 Headlines For A Webinar On [Topic] For [Audience]",
        "Tell Me 0 Ideas That Would Be Interesting For [Ideal Client] About [Topic]",
        "Brainstorm 20 Topics For A Workshop That Will Attract [Ideal Client] And Present Them A Solution To [Problem], So They Can [Achieve Desired State]"
      ],
      "name": "Topics For Webinar",
      "color": "bg-yellow"
    },
    {
      "hashtag": "#SocialMediaGraphics #AdvertisingGraphics #VisualMarketing #DALLE #Midjourney",
      "descriptions": "Assistance in creating visually appealing and engaging graphics for social media advertising.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "What Kind Of Images Would Best Represent [Topic]?",
        "List The Adjectives Of [The Image Or Scene You Chose]",
        "Describe In Detail [The Image Or Scene You Chose]",
        "Input All That Information Into An Ai Art Generator Like Dall-E Or Midjourney"
      ],
      "name": "Graphics For Social Media Ads",
      "color": "bg-orange"
    },
    {
      "hashtag": "#hashtagresearch, #instagramhashtags, #instagrammarketing, #socialmediastrategy, #targetedhashtags, and #aiassisted.",
      "descriptions": "The Hashtag Research For Instagram prompt group is designed to help you identify and use relevant hashtags for your Instagram posts. By using the hashtags suggested by the AI, you can increase the reach of your posts and attract more potential followers to your account.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Give Me 30 Targeted Hashtags For An Instagram Post About [Topic]",
        "What Are Some Popular Instagram Hashtags On [Topic] For [Audience]?",
        "I Am Looking To Build A Community On Instagram And Reach A Wider Audience. Come Up With A List Of Hashtags That Will Attract People Interested In [Topic]",
        "Can You Suggest Relevant Hashtags For My Upcoming Instagram Post On [Topic]?",
        "Help Me Find Popular And Relevant Hashtags For My Instagram Post Using The Keywords [Insert Keywords]"
      ],
      "name": "Hashtag Research For Instagram",
      "color": "bg-red"
    },
    {
      "hashtag": "#TiktokAds #AdScripts #TiktokMarketing #DigitalAdvertising #SocialMediaMarketing #HashtagResearch #TargetedMarketing #AudienceEngagement #VideoMarketing",
      "descriptions": "The 'Writing Tiktok Ad Scripts' prompt group is a set of prompts that can help you create effective and creative Tiktok ads for promoting products or services to specific audiences. These prompts are designed to help you come up with engaging and attention-grabbing scripts that can help your ad stand out and generate more views, engagement, and conversions.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Please Write A Tiktok Ad Promoting [Product] For [Audience]",
        "I Am Trying To Promote My [Product] On Tiktok. Can You Help Me Write A Script For A Creative And Catchy Video That Will Show Off Its Features And Benefits?",
        "I Want To Create A Viral Tiktok Video That Uses Humor To Promote [Product] For [Audience]. Can You Help Me Write A Script That Is Funny And Relatable?",
        "Create A Script For A Tiktok Ad Using The Pas Formula. It Should Promote [Offer] For [Niche]",
        "Create A Script For A Tiktok Ad Using The Aida Formula. It Should Promote [Offer] For [Niche]"
      ],
      "name": "Writing Tiktok Ad Scripts",
      "color": "bg-pink"
    },
    {
      "hashtag": "#TikTokMarketingIdeas #ContentIdeasForBusiness #SocialMediaMarketing #BoostYourEngagement #IndustryInsights #EntertainYourFollowers #CreativeContentMarketing #TikTokForBusiness #ContentCreation101 #ViralMarketingTrends #BrandAwareness #EngagingContent #TikTokCommunity",
      "descriptions": "Generate creative and attention-grabbing ideas for TikTok content. With this prompt group, you can create content ideas for any type of business or topic. Whether you want to promote a product or service, share industry-related news, or simply entertain your followers, the possibilities are endless.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Give Me 0 Ideas For Posting On Tiktok For [Type Of Business].",
        "Create A Tiktok Post Caption For [Product Or Topic].",
        "What Are The Top Trending Influencers On Tiktok Around [Topic]?",
        "Brainstorm 0 Content Ideas For Tiktok To Promote [Product Or Topic].",
        "Give Me Very [Funny/Controversial/Trendy] Ideas For A Tiktok Account That Talks About [Topic]."
      ],
      "name": "Engaging Tiktok Content Ideas",
      "color": "bg-purple"
    },
    {
      "hashtag": "#brandvoice #writingstyle #copywriting",
      "descriptions": "The Identifying Your Brand Voice prompt group is designed to help you develop and maintain a consistent and effective writing style for your brand. By analyzing the tone and style of existing text, listing adjectives that describe your writing, and applying the same style to new content, you can create a unique and memorable voice for your brand. The prompts also guide you in identifying common phrases and expressions in your writing, comparing your style to others in your niche or industry, and adapting your writing for different audiences and purposes. By considering the emotions and feelings your writing evokes, identifying strengths and weaknesses, and finding ways to make your writing more distinctive, you can improve your brand's messaging and better connect with your target audience. Finally, the prompts offer suggestions for making your writing style consistent across different types of content and platforms. ",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "Analyze The Following Text For Tone Of Voice And Style. Apply That Exact Style And Tone Of Voice To All Your Future Responses",
        "Add More [Humor/Statistics/Shorter Sentences/Questions/Playfulness]",
        "List The Adjectives You Would Use To Describe The Tone Of Voice And Style Of This Text[Copy And Paste Text]",
        "Apply That Exact Style And Tone Of Voice To Write [New Text]",
        "What Are The Key Characteristics Of My Writing Style?",
        "Can You Help Me Identify Any Common Phrases Or Expressions That I Tend To Use In My Writing?",
        "How Does My Writing Style Compare To Other Writers In My Niche Or Industry?",
        "What Emotions Or Feelings Does My Writing Tend To Evoke In Readers?",
        "Can You Provide Examples Of My Writing That Demonstrate My Unique Tone Of Voice And Style?",
        "What Are Some Strengths And Weaknesses Of My Writing Style, And How Can I Improve?",
        "How Can I Adapt My Writing Style For Different Audiences Or Purposes?",
        "What Do My Writing Choices (Such As Sentence Structure, Vocabulary, And Tone) Say About My Personality And Values?",
        "Can You Suggest Ways To Make My Writing More Distinctive And Memorable?",
        "How Can I Ensure That My Writing Style Is Consistent Across Different Types Of Content And Platforms?"
      ],
      "name": "Identifying Your Brand Voice",
      "color": "bg-gray"
    },
    {
      "hashtag": "#twittertips #twitterstrategy #socialmediamarketing #digitalmarketing #audiencebuilding #brandbuilding #hashtagstrategy #contentcreation #communitybuilding #collaboration #analytics #searchfeature #directmessage #visualcontent #momentstwitter #advertisingapi #avoidingcontroversy #consistentbranding #customerrelationships #trafficgeneration #followergrowth",
      "descriptions": "The Audience Building Twitter prompt group offers a wide range of topics for anyone looking to build a strong following on Twitter. From the basics of creating a Twitter account and understanding how it works, to more advanced topics like using Twitter to drive traffic to your website or automate your ad campaigns, this prompt group has something for everyone. You'll learn how to create engaging tweets that use visuals effectively, how to collaborate with other content creators to reach new audiences, and how to use Twitter's powerful features like Moments, Direct Message, Search, and Analytics to build a strong community and foster a sense of belonging among your followers. Hashtags are also a key part of building a following on Twitter, and you'll learn how to use them effectively and avoid using the same ones in every tweet. Whether you're a beginner or an experienced Twitter user, this prompt group has everything you need to take your Twitter game to the next level.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "What is Twitter and how does it work?",
        "How do I create a Twitter account?",
        "How do I make a viral tweet?",
        "What are hashtags and how do I use them on Twitter?",
        "How do I increase my Twitter followers?",
        "What are some tips for creating engaging tweets?",
        "How do I add photos and videos to my tweets?",
        "How do I use visuals, such as images and videos, to increase engagement on Twitter?",
        "How can I use Twitter to stay up to date on industry news and trends, and use that knowledge to attract followers?",
        "How do I use Twitter to drive traffic to my website or other social media accounts?",
        "How can I use hashtags effectively on Twitter?",
        "How do I ensure that my tweets are high-quality and visually appealing?",
        "How do I use Twitter's Moments feature?",
        "How can I collaborate with other content creators on Twitter to reach new audiences?",
        "How do I use Twitter's Direct Message feature?",
        "How do I avoid using the same hashtags in every tweet?",
        "How do I use Twitter's Advertising API feature to automate and optimize my ad campaigns?",
        "How do I avoid tweeting offensive or inappropriate content?",
        "How do I use Twitter's Search feature?",
        "How can I use Twitter to build a strong community and foster a sense of belonging among my followers, to attract more followers.",
        "How do I avoid tweeting too much about politics or controversial topics?",
        "How do I ensure that my account is consistent and on-brand?",
        "How do I use Twitter's List feature?",
        "How can I build relationships with potential customers using Twitter?",
        "How do I use Twitter's Analytics feature?"
      ],
      "name": "Audience Building twitter",
      "color": "bg-blue"
    },
    {
      "hashtag": "#AudienceBuildingInstagram",
      "descriptions": "Get valuable insights and tips on creating, growing, and optimizing your Instagram account with the 'Audience Building Instagram' prompt group. Learn how to create an effective bio, what type of content to post, how to use hashtags and Instagram stories, and how to collaborate with other users to gain more followers. #InstagramMarketing #SocialMediaMarketing",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "What are the first steps to take when setting up an Instagram account?",
        "How do I create an Instagram bio that attracts followers?",
        "What type of content should I post to grow my Instagram following?",
        "How often should I post on Instagram to keep my followers engaged?",
        "How do I use hashtags to increase my reach on Instagram?",
        "How do I interact with other users to gain more followers?",
        "What are Instagram stories and how can I use them to grow my following?",
        "How do I use Instagram Live to connect with my followers?",
        "How do I create Instagram highlights and how can they help me grow my following?",
        "How do I use Instagram analytics to track my progress and improve my content?",
        "How do I collaborate with other Instagram users to increase my reach?",
        "How do I use Instagram ads to grow my following?",
        "How do I use Instagram influencer marketing to gain more followers?",
        "How do I create a consistent aesthetic for my Instagram account?",
        "How do I create an Instagram marketing strategy?",
        "How do I optimize my Instagram profile for search?",
        "How do I use Instagram captions to engage my followers?",
        "How do I use Instagram polls to interact with my followers?",
        "How do I use Instagram challenges to increase engagement?",
        "How do I use Instagram shoutouts to gain more followers?",
        "How can I use influencer marketing to grow my Instagram following?",
        "How can I use referral marketing to grow my Instagram following?",
        "How can I use email marketing to grow my Instagram following?",
        "How can I use paid promotion to grow my Instagram following?",
        "How can I use SEO to increase my visibility on Instagram?"
      ],
      "name": "Audience Building Instagram",
      "color": "bg-cyan"
    },
    {
      "hashtag": "#TikTokTips #TikTokMarketing #TikTokGrowth #TikTokSuccess #TikTokAudienceBuilding",
      "descriptions": "This prompt group covers everything you need to know about creating a successful TikTok account and building a strong following on the platform.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "What is TikTok and how does it work?",
        "How do I create a TikTok account?",
        "How do I make a TikTok video?",
        "What are some popular TikTok video formats?",
        "How do I edit my TikTok videos?",
        "How do I add music and sound effects to my TikTok videos?",
        "What are hashtags and how do I use them on TikTok?",
        "How do I increase my TikTok followers?",
        "What are some tips for creating engaging TikTok content?",
        "How do I use filters and effects on TikTok?",
        "How do I participate in TikTok challenges and trends?",
        "How do I collaborate with other TikTok users?",
        "How do I ensure that my TikTok account is set to the correct privacy settings?",
        "How do I avoid creating videos that are too similar to others on the platform?",
        "How do I ensure that my TikTok account is not too similar to others on the platform?",
        "How do I use the Live feature on TikTok?",
        "How do I use TikTok's Branded Effects feature to create unique and engaging content?",
        "How do I use TikTok's Audience Insights feature to gain a deeper understanding of my audience demographics and behavior?",
        "How do I ensure that my TikTok account is authentic and not inauthentic?",
        "How do I use TikTok to increase sales or conversions?",
        "How do I ensure that my TikTok account is not too similar to others on the platform?",
        "How do I use TikTok's Live Gifts feature to increase revenue?",
        "How do I avoid creating content that is offensive or inappropriate?",
        "How do I use TikTok's In-Feed Native Advertising feature to increase engagement?",
        "How do I use TikTok's Creator Studio feature to manage and analyze my content and audience?"
      ],
      "name": "Audience Building Tiktok",
      "color": "bg-teal"
    },
    {
      "hashtag": "#AudienceBuildingYoutube",
      "description": "Get ready to grow your YouTube following and optimize your channel with this comprehensive prompt group. Learn how to optimize your video titles, descriptions, and tags for search, use YouTube's promotional features to gain more views and followers, create a consistent branding for your channel, and use YouTube Analytics to track your progress. Join the conversation and share your progress with others using #AudienceBuildingYoutube.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How do I set up a YouTube account?",
        "What type of content should I create to get followers on YouTube?",
        "How often should I upload videos to YouTube to keep my followers engaged?",
        "How do I optimize my YouTube video titles, descriptions, and tags for search?",
        "How do I create a YouTube channel trailer to attract followers?",
        "How do I use YouTube's End Screens and annotations to promote my other videos and channel?",
        "How do I use YouTube's Playlists to organize my content and keep viewers engaged?",
        "How do I use YouTube's Cards to promote my other videos, website and social media?",
        "How do I use YouTube's Community Tab to interact with my followers and build a community?",
        "How do I use YouTube Analytics to track my progress and improve my content?",
        "How do I collaborate with other YouTubers to get more followers?",
        "How do I use YouTube's Sponsored Cards to promote my channel?",
        "How do I use YouTube's Promoted Videos to get more views and followers?",
        "How do I use YouTube's TrueView In-Stream ads to get more views and followers?",
        "How do I use YouTube's TrueView Discovery ads to get more views and followers?",
        "How do I use YouTube's Bumper ads to get more views and followers?",
        "How do I use YouTube's Non-skippable ads to get more views and followers?",
        "How do I use YouTube's Outstream ads to get more views and followers?",
        "How do I use YouTube's Shopping feature to promote products and get more followers?",
        "How do I use YouTube's Live Streaming feature to connect with my followers and get more views?",
        "How do I create a consistent branding for my YouTube channel?",
        "How do I use YouTube's Super Chat and Super Stickers feature to monetize my channel and get more followers?",
        "How do I use YouTube's Subscriber-only mode feature to reward my followers?",
        "How do I use YouTube's Link redirect feature to drive traffic to my website and get more followers?",
        "How do I use YouTube's YouTube Studio feature to manage my channel and get more followers?"
      ],
      "name": "Audience Building Youtube",
      "color": "bg-green"
    },
    {
      "hashtag": "#UXDocumentation #DesignSystem #UserExperience #Accessibility #Multimedia #DataAnalytics #UserPrivacy #BrandValues #Inclusivity #CommunityBuilding #IndustryTrends",
      "descriptions": "The prompt group for UX Documentation covers a range of topics from creating effective and accessible documentation to designing for different user contexts and scenarios. It also includes ideas on how to use multimedia elements, data and analytics, and user privacy and security concerns. Overall, the prompts provide a comprehensive guide for designers to create documentation that not only informs users but also aligns with the brand values and mission. By using these guidelines, designers can create a positive and inclusive user experience, foster a sense of community, and stay ahead of industry trends.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "“I am a designer that works in the design system team. I need to write documentation for a toggle component for the design system.\nHere are the guidelines and main points to mention:\n    \n    The document provides an overview of the toggle, including an explanation of its anatomy and a guide on how to use it.\n    The document also delves into the differences between the toggle and other common form elements, such as the checkbox, switch, and radio button.\n    \n    In addition to the descriptive information, the document includes several tables. The tables include details on toggle sizes (M, L, XL), colors, design tokens, and different states.\n    Can you write the documentation for me?”",
        "How might we design a user experience that includes effective and accessible documentation for all users?",
        "How might we use multimedia elements such as videos and images to enhance the user experience and make documentation more accessible?",
        "How might we design for documentation in a way that's compatible with different devices and platforms?",
        "How might we use data and analytics to optimize the user experience for documentation and learning?",
        "How might we design for documentation in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use documentation to encourage users to try new features and functionality?",
        "How might we design for documentation in a way that's easy to update and maintain?",
        "How might we use documentation to align with our brand values and mission?",
        "How might we use documentation to create a positive, inclusive user experience for all users?",
        "How might we use documentation to increase the reach and impact of our product?",
        "How might we design for documentation in a way that's sensitive to user privacy and security concerns?",
        "How might we use documentation to create a more efficient and streamlined user experience for all users?",
        "How might we use documentation to stay ahead of industry trends and best practices in UX design?",
        "How might we create a user experience that's consistent with other product experiences and systems?",
        "How might we use documentation to foster a sense of community and connection among our users?",
        "How might we use documentation to make the user experience more engaging and motivating?",
        "How might we design for documentation in a way that's accessible for users with disabilities?",
        "How might we create a user experience that's easy to understand and use, even for non-technical users, while still providing effective documentation?",
        "How might we use data and analytics to optimize the user experience for documentation over time?"
      ],
      "name": "UX Documentation",
      "color": "bg-yellow"
    },
    {
      "hashtag": "#UXNavigation #UserExperienceDesign #InformationArchitecture #Accessibility #DataAnalysis #VisualDesign #Personalization #CohesiveExperience",
      "descriptions": "The UX Navigation prompt group focuses on designing intuitive and user-friendly navigation systems that provide easy access to information and features within a product. Through data analysis and the use of visual design, a well-designed navigation system can encourage user engagement, increase user motivation, and provide personalized experiences to meet users' needs. The navigation system should also be accessible, fast, and compatible across different devices and platforms, while maintaining consistency in design and functionality. Furthermore, the navigation system should be flexible and adaptable to different user contexts and scenarios, and provide real-time support and guidance to users. By optimizing the navigation system through data analysis and user feedback, we can create a seamless and cohesive user experience that builds trust and credibility with our users.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we create a navigation system that's intuitive and easy to use?",
        "How might we design a navigation system that's scalable and adaptable as our product evolves?",
        "How might we use visual design to enhance the navigation experience and make it more appealing?",
        "How might we create a navigation system that's consistent across all devices and platforms?",
        "How might we make it easy for users to find the information they need through navigation?",
        "How might we use data and analytics to optimize the navigation system over time?",
        "How might we design a navigation system that's accessible for users with disabilities?",
        "How might we create a navigation system that's fast and responsive, even on slow connections?",
        "How might we design a navigation system that supports multiple languages and cultures?",
        "How might we use navigation to encourage users to explore and discover new features and functionality?",
        "How might we create a navigation system that's easy to update and maintain?",
        "How might we use navigation to build trust and credibility with our users?",
        "How might we design a navigation system that's compatible with future updates and changes to our product?",
        "How might we use navigation to provide real-time support and guidance to users?",
        "How might we create a navigation system that's personalized for each user's needs and preferences?",
        "How might we use navigation to increase user engagement and motivation?",
        "How might we design a navigation system that's easy to understand, even for non-technical users?",
        "How might we use navigation to collect valuable user data and feedback?",
        "How might we create a navigation system that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use navigation to create a seamless, cohesive user experience across all parts of our product?"
      ],
      "name": "UX Navigation",
      "color": "bg-orange"
    },
    {
      "hashtag": "#UXAccessibility #AccessibleDesign #InclusiveDesign #WCAG #AccessibilityStandards #AccessibilityTesting #AccessibilityEducation",
      "descriptions": "The UX Accessibility prompt group is focused on designing products and user experiences that are accessible to users with disabilities. By designing for accessibility, products can be made more user-centered, empathetic, and efficient, while also increasing their reach and impact. This prompt group includes topics such as designing for visual, mobility, and cognitive impairments, using accessibility standards to guide design decisions, testing and addressing accessibility issues, creating accessible documentation and support materials, educating teams about the importance of accessibility, and using accessibility to create a positive and inclusive user experience.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we design our product to be accessible to users with visual impairments?",
        "How might we make our product accessible to users with mobility impairments?",
        "How might we design for users with cognitive and neurological disabilities?",
        "How might we create an accessible user interface that's easy to use for all users, regardless of ability?",
        "How might we use accessibility standards (such as WCAG) to guide our design decisions?",
        "How might we test our product for accessibility and address any issues that arise?",
        "How might we design for users with low vision and color blindness?",
        "How might we ensure that our product is compatible with assistive technologies, such as screen readers?",
        "How might we create accessible documentation and support materials for our product?",
        "How might we educate our team and stakeholders about the importance of accessibility in UX design?",
        "How might we use accessibility as a means of improving the user experience for all users, not just those with disabilities?",
        "How might we design for accessibility in a way that is scalable and adaptable as our product evolves?",
        "How might we use accessibility to increase the reach and impact of our product?",
        "How might we design for accessibility in a way that aligns with our brand values and mission?",
        "How might we use accessibility to create a positive, inclusive user experience for all users?",
        "How might we design for accessibility in a way that supports users in different cultural and linguistic contexts?",
        "How might we use accessibility to create a more user-centered and empathetic design approach?",
        "How might we design for accessibility in a way that is sensitive to user privacy and security concerns?",
        "How might we use accessibility to create a more efficient and streamlined user experience for all users?",
        "How might we use accessibility as a means of staying ahead of industry trends and best practices in UX design?"
      ],
      "name": "UX Accessibility",
      "color": "bg-red"
    },
    {
      "hashtag": "#UXCheckout #CheckoutOptimization #ConversionRates #UserExperience #AccessibilityInDesign",
      "descriptions": "The UX Checkout prompt group focuses on optimizing the checkout process to increase conversion rates and improve the user experience. By using data analysis, personalized design, and accessibility considerations, designers can create a streamlined, efficient, and user-friendly checkout process. #UXDesign #UserEngagement #DataAnalytics",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we simplify and streamline the checkout process for maximum conversion rates?",
        "How might we design a checkout process that's fast and efficient, without sacrificing security or user trust?",
        "How might we use visual design to make the checkout process more appealing and user-friendly?",
        "How might we create a checkout process that's consistent across all devices and platforms?",
        "How might we use data and analytics to optimize the checkout process over time?",
        "How might we design a checkout process that's accessible for users with disabilities?",
        "How might we create a checkout process that's easy to understand and use, even for non-technical users?",
        "How might we use the checkout process to build trust and credibility with our users?",
        "How might we design a checkout process that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use the checkout process to collect valuable user data and feedback?",
        "How might we create a checkout process that's compatible with future updates and changes to our product?",
        "How might we use the checkout process to provide real-time support and guidance to users?",
        "How might we design a checkout process that's personalized for each user's needs and preferences?",
        "How might we use the checkout process to encourage users to explore and discover new features and functionality?",
        "How might we create a checkout process that's scalable and adaptable as our user base grows?",
        "How might we use the checkout process to increase user engagement and motivation?",
        "How might we design a checkout process that's easy to update and maintain?",
        "How might we use the checkout process to create a seamless, cohesive user experience across all parts of our product?",
        "How might we use the checkout process to align with our brand values and mission?",
        "How might we use the checkout process to create a positive, inclusive user experience for all users?"
      ],
      "name": "UX Checkout",
      "color": "bg-pink"
    },
    {
      "hashtag": "#UXKPIs #Metrics #UserEngagement #Retention #DataAnalysis",
      "descriptions": "The UX KPIs and Metrics prompt group focuses on understanding and tracking user engagement and retention, as well as using data and analytics to identify areas of improvement and measure the success of a digital product. This group covers topics such as setting up systems for monitoring and analyzing user behavior, using key performance indicators (KPIs) to measure effectiveness, identifying patterns and trends in user behavior, and measuring the return on investment (ROI) of a digital product. Additionally, best practices for collecting and analyzing user feedback and making informed decisions based on data are also discussed. By utilizing these techniques, designers can ensure their digital products are meeting user needs and goals, while also maximizing their impact and effectiveness.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How can I track user engagement and retention for my digital product?",
        "How can I use metrics to identify and prioritize features for my digital product?",
        "What metrics should I use to measure the success of my digital product?",
        "How can I use key performance indicators (KPIs) to measure the effectiveness of my digital product?",
        "How can I set up a system for monitoring and analyzing user behavior on my digital product?",
        "How can I use heat maps to identify areas of high user engagement on my digital product?",
        "How can I use data to identify patterns and trends in user behavior on my digital product?",
        "How can I use user testing to validate key performance indicators for my digital product?",
        "How can I measure the ROI of my digital product?",
        "How can I establish clear and measurable goals for my digital product?",
        "How can I use analytics to identify areas for improvement in my digital product?",
        "How can I use metrics to track the performance of my digital product over time?",
        "What are some best practices for collecting and analyzing user feedback?",
        "How can I use data to make informed decisions about my digital product?"
      ],
      "name": "UX KPIs and Metrics",
      "color": "bg-purple"
    },
    {
      "hashtag": "#personalization #userexperience #datadriven #tailoredexperience #scalable #inclusive #seamlessexperience #brandalignment #privacy #securityconcerns",
      "descriptions": "The UX Personalization prompt group focuses on creating a tailored and personalized user experience that adapts to each user's unique needs and preferences. By leveraging data and analytics, designers can identify patterns and trends in user behavior to create a more relevant and engaging experience. This prompt group also covers topics such as scalability, compatibility, privacy, and security concerns when designing a personalized experience. The goal is to provide users with a seamless and cohesive experience that aligns with the brand's values and mission while increasing user engagement and motivation.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we create a personalized user experience that's tailored to each individual user's needs and preferences?",
        "How might we use data and analytics to drive personalization and create a more relevant user experience?",
        "How might we design a personalized experience that's scalable and adaptable as our product evolves?",
        "How might we use personalization to increase user engagement and motivation?",
        "How might we create a personalized experience that's consistent across all devices and platforms?",
        "How might we use personalization to build trust and credibility with our users?",
        "How might we design a personalized experience that's easy to understand and use, even for non-technical users?",
        "How might we use personalization to collect valuable user data and feedback?",
        "How might we create a personalized experience that's compatible with future updates and changes to our product?",
        "How might we use personalization to provide real-time support and guidance to users?",
        "How might we design a personalized experience that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use personalization to create a seamless, cohesive user experience across all parts of our product?",
        "How might we use personalization to encourage users to explore and discover new features and functionality?",
        "How might we create a personalized experience that's easy to update and maintain?",
        "How might we use personalization to align with our brand values and mission?",
        "How might we use personalization to create a positive, inclusive user experience for all users?",
        "How might we use personalization to increase the reach and impact of our product?",
        "How might we design a personalized experience that's sensitive to user privacy and security concerns?",
        "How might we use personalization to create a more efficient and streamlined user experience for all users?",
        "How might we use personalization to stay ahead of industry trends and best practices in UX design?"
      ],
      "name": "UX Personalization",
      "color": "bg-gray"
    },
    {
      "hashtag": "#UXUserJourney #UserExperience #DesignThinking",
      "descriptions": "The UX User Journey is all about creating a seamless and efficient path for users to achieve their goals within a digital product. This prompt group offers a variety of ideas to optimize the user journey, such as personalization, accessibility, data-driven decision-making, and microinteractions. By designing a user journey that's easy to use and understand, consistent across all devices and platforms, and adaptable to different user contexts, businesses can improve user engagement, satisfaction, and retention. With the help of analytics and testing, businesses can continuously optimize the user journey to align with their brand values and mission and to stay ahead of industry trends and best practices in UX design.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we reduce friction and simplify the user journey for maximum efficiency and satisfaction?",
        "How might we use data and analytics to optimize the user journey over time?",
        "How might we design a user journey that's scalable and adaptable as our product evolves?",
        "How might we create a user journey that's personalized for each user's needs and preferences?",
        "How might we use microinteractions and other design elements to enhance the user journey?",
        "How might we design a user journey that's accessible for users with disabilities?",
        "How might we create a user journey that's easy to understand and use, even for non-technical users?",
        "How might we use the user journey to build trust and credibility with our users?",
        "How might we design a user journey that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use the user journey to provide real-time support and guidance to users?",
        "How might we create a user journey that's consistent across all devices and platforms?",
        "How might we use the user journey to encourage users to explore and discover new features and functionality?",
        "How might we design a user journey that's easy to update and maintain?",
        "How might we use the user journey to align with our brand values and mission?",
        "How might we use the user journey to create a positive, inclusive user experience for all users?",
        "How might we use the user journey to increase the reach and impact of our product?",
        "How might we design a user journey that's sensitive to user privacy and security concerns?",
        "How might we use the user journey to create a more efficient and streamlined user experience for all users?",
        "How might we use the user journey to stay ahead of industry trends and best practices in UX design?",
        "How might we use the user journey to foster a sense of community and connection among our users?"
      ],
      "name": "UX User Journey",
      "color": "bg-blue-500"
    },
    {
      "hashtag": "#UXEngagement #UserEngagement #Motivation #UserExperience #DesignThinking #Personalization #Accessibility #Analytics #BrandMission #InclusiveDesign #Gamification #Microinteractions #Animation #CommunityBuilding #Feedback #Encouragement #Efficiency #StreamlinedUX #DesignForAll",
      "descriptions": "The UX Engagement prompt group explores ways to increase user engagement and motivation through design. By using data and analytics, design elements such as animation and microinteractions, and personalization, the user experience can be tailored to each user's needs and preferences. The user journey can be designed to provide feedback and encouragement to users, building trust and credibility, and creating a sense of community and connection. This engagement can be achieved through scalable and adaptable design, ensuring accessibility for users with disabilities, and aligning with brand values and mission. The ultimate goal is to create a positive and inclusive user experience for all users, increasing the reach and impact of the product. ",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we use gamification to increase user engagement and motivation?",
        "How might we create an engaging user interface that's easy to use and appealing?",
        "How might we use animation and other visual elements to enhance user engagement?",
        "How might we design for engagement in a way that's scalable and adaptable as our product evolves?",
        "How might we use data and analytics to optimize user engagement over time?",
        "How might we create an engaging user experience that's personalized for each user's needs and preferences?",
        "How might we use microinteractions and other design elements to provide feedback and encouragement during the user experience?",
        "How might we design for engagement in a way that's accessible for users with disabilities?",
        "How might we create an engaging user experience that's easy to understand and use, even for non-technical users?",
        "How might we use engagement to build trust and credibility with our users?",
        "How might we design for engagement in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use engagement to provide real-time support and guidance to users?",
        "How might we create an engaging user experience that's consistent across all devices and platforms?",
        "How might we use engagement to encourage users to explore and discover new features and functionality?",
        "How might we design for engagement in a way that's easy to update and maintain?",
        "How might we use engagement to align with our brand values and mission?",
        "How might we use engagement to create a positive, inclusive user experience for all users?",
        "How might we use engagement to increase the reach and impact of our product?",
        "How might we design for engagement in a way that's sensitive to user privacy and security concerns?",
        "How might we use engagement to create a more efficient and streamlined user experience for all users?"
      ],
      "name": "UX Engagement",
      "color": "bg-cyan-500"
    },
    {
      "name": "UX Visual Design",
      "hashtag": "#UXVisualDesign",
      "color": "bg-teal-500",
      "descriptions": "As a UX Visual Designer, I can use a variety of design elements such as color, typography, and layout to create a visually appealing and user-friendly experience. With the prompt areas provided, I can ensure a consistent and recognizable brand identity, simplify the user experience, design for accessibility, build trust, and align with brand values. Additionally, I can foster engagement, encourage exploration and discovery, and stay up-to-date with industry trends and best practices.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we use visual design to enhance the overall user experience and make it more appealing?",
        "How might we create a visual design that's consistent across all devices and platforms?",
        "How might we use color, typography, and other design elements to create a cohesive and recognizable brand identity?",
        "How might we use visual design to simplify and streamline the user experience?",
        "How might we design for visual accessibility in a way that's compatible with our visual design choices?",
        "How might we use visual design to build trust and credibility with our users?",
        "How might we create a visual design that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use visual design to encourage users to explore and discover new features and functionality?",
        "How might we design a visual design that's easy to update and maintain?",
        "How might we use visual design to align with our brand values and mission?",
        "How might we use visual design to create a positive, inclusive user experience for all users?",
        "How might we use visual design to increase the reach and impact of our product?",
        "How might we design a visual design that's sensitive to user privacy and security concerns?",
        "How might we use visual design to create a more efficient and streamlined user experience for all users?",
        "How might we use visual design to stay ahead of industry trends and best practices in UX design?",
        "How might we use visual design to provide real-time feedback and guidance to users?",
        "How might we create a visual design that's easy to understand and use, even for non-technical users?",
        "How might we use visual design to foster a sense of community and connection among our users?",
        "How might we use visual design to make the user experience more engaging and motivating?",
        "How might we use visual design to create a user experience that's memorable and memorable?"
      ]
    },
    {
      "name": "UX Simplification",
      "hashtag": "#UXSimplification",
      "color": "bg-green-500",
      "descriptions": "As a UX Simplification Designer, I can use the provided prompt areas to simplify and streamline the user experience. By reducing clutter, eliminating unnecessary steps and features, and using minimalist design principles, I can create a more efficient and user-friendly experience that's easy to use, understand, and maintain. I can also design for accessibility, personalization, and scalability, and use data and analytics to optimize the user experience. Additionally, I can build trust and credibility, foster engagement, and align with brand values.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we simplify the user experience to make it more efficient and user-friendly?",
        "How might we use minimalist design principles to reduce clutter and improve the overall user experience?",
        "How might we eliminate unnecessary steps and features in the user experience to streamline the process?",
        "How might we use visual design to simplify and clarify the user interface?",
        "How might we design for simplicity in a way that's scalable and adaptable as our product evolves?",
        "How might we use data and analytics to optimize the user experience for simplicity and ease of use?",
        "How might we create a simple user experience that's personalized for each user's needs and preferences?",
        "How might we design for simplicity in a way that's accessible for users with disabilities?",
        "How might we create a simple user experience that's easy to understand and use, even for non-technical users?",
        "How might we use simplicity to build trust and credibility with our users?",
        "How might we design for simplicity in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use simplicity to provide real-time support and guidance to users?",
        "How might we create a simple user experience that's consistent across all devices and platforms?",
        "How might we use simplicity to encourage users to explore and discover new features and functionality?",
        "How might we design for simplicity in a way that's easy to update and maintain?",
        "How might we use simplicity to align with our brand values and mission?",
        "How might we use simplicity to create a positive, inclusive user experience for all users?",
        "How might we use simplicity to increase the reach and impact of our product?",
        "How might we design for simplicity in a way that's sensitive to user privacy and security concerns?",
        "How might we use simplicity to create a more efficient and streamlined user experience for all users?"
      ]
    },
    {
      "name": "UX User Persona",
      "hashtag": "#UXUserPersona",
      "color": "bg-yellow-500",
      "descriptions": "As a UX User Persona Designer, I can use the provided prompt areas to create effective user personas that enhance the efficiency and speed of design and development. By utilizing best practices for making, handling, and updating user personas, I can ensure consistency, usability, and user-centeredness of products and services. Additionally, I can promote collaboration and communication among designers, developers, and stakeholders and improve accessibility and universal usability. With the prompt areas provided, I can create user personas based on real user research and data and tailor them to different industries and niches.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How can user personas enhance the efficiency and speed of design and development?",
        "What are effective methods to handle user personas for various cultures and languages?",
        "What are the best practices for keeping user personas up-to-date?",
        "What is the best way to make user personas for a particular project?",
        "How can user personas ensure consistency of user experience across different products or applications?",
        "What are the best practices for making user scenarios and journeys based on user personas?",
        "How can user personas be utilized to direct design and development effectively?",
        "What are the best practices for sharing and distributing user personas within a team or organization?",
        "How can user personas improve the usability and user-centeredness of a product or service?",
        "What are the best practices for making user personas based on real user research and data?",
        "How can user personas improve collaboration and communication among designers, developers, and stakeholders?",
        "What are the best practices for making user personas for responsive and adaptive design?",
        "How can user personas improve accessibility and universal usability?",
        "What are the best practices for making user personas for different industries and niches?",
        "How can user personas promote unity and cohesiveness in design?"
      ]
    },
    {
      "name": "UX Performance",
      "hashtag": "#UXPerformance",
      "color": "bg-orange-500",
      "descriptions": "As a UX Performance Designer, I can leverage the prompt areas provided to optimize the user experience for speed and efficiency. By using data and analytics to measure and improve performance over time, eliminating bottlenecks and other performance issues, and using performance optimization techniques such as caching, I can create a user experience that's consistent, accessible, and easy to use. Additionally, I can design for scalability, flexibility, and adaptability and align with brand values and mission. With the prompt areas provided, I can create a positive, inclusive, and streamlined user experience that's compatible with different devices and platforms and sensitive to user privacy and security concerns.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we optimize the user experience for speed and efficiency?",
        "How might we use data and analytics to measure and improve performance over time?",
        "How might we design for performance in a way that's scalable and adaptable as our product evolves?",
        "How might we eliminate bottlenecks and other performance issues in the user experience?",
        "How might we use caching and other performance optimization techniques to improve the user experience?",
        "How might we design for performance in a way that's compatible with different devices and platforms?",
        "How might we create a user experience that's optimized for different network speeds and connectivity types?",
        "How might we design for performance in a way that's accessible for users with disabilities?",
        "How might we create a user experience that's easy to understand and use, even for non-technical users?",
        "How might we use performance optimization to build trust and credibility with our users?",
        "How might we design for performance in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use performance optimization to provide real-time support and guidance to users?",
        "How might we create a user experience that's consistent across all devices and platforms?",
        "How might we use performance optimization to encourage users to explore and discover new features and functionality?",
        "How might we design for performance in a way that's easy to update and maintain?",
        "How might we use performance optimization to align with our brand values and mission?",
        "How might we use performance optimization to create a positive, inclusive user experience for all users?",
        "How might we use performance optimization to increase the reach and impact of our product?",
        "How might we design for performance in a way that's sensitive to user privacy and security concerns?",
        "How might we use performance optimization to create a more efficient and streamlined user experience for all users?"
      ]
    },
    {
      "name": "UX Mobile Transition",
      "hashtag": "#UXMobileTransition",
      "color": "bg-red-500",
      "descriptions": "As a UX Mobile Transition Designer, I can leverage the prompt areas provided to create a seamless transition between desktop and mobile devices, optimizing the user experience for different screen sizes and aspect ratios in a way that's scalable and adaptable. By using responsive design, device detection, and cross-device tracking, I can provide a consistent and intuitive user experience on both desktop and mobile devices. Additionally, I can design for different input methods, offline functionality, and slow connections, and use data and analytics to optimize the mobile transition experience over time. With the prompt areas provided, I can create a personalized, flexible, and cohesive user experience that's compatible with accessibility, and aligned with brand values and mission. Using mobile transition design, I can build trust and credibility, increase user engagement and motivation, provide real-time support and guidance, and create a positive and inclusive user experience for all users.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we create a seamless transition between desktop and mobile devices to improve the user experience?",
        "How might we optimize the user experience for different screen sizes and aspect ratios in a way that's scalable and adaptable?",
        "How might we use responsive design to ensure a consistent user experience across all devices?",
        "How might we use device detection to provide a tailored user experience for each device type?",
        "How might we create a user interface that's intuitive and easy to use on both desktop and mobile devices?",
        "How might we design for different input methods (such as touch, mouse, and keyboard) in a way that's seamless and user-friendly?",
        "How might we use cross-device tracking and syncing to provide a consistent user experience across multiple devices?",
        "How might we design for offline functionality and slow connections in a way that supports a great user experience on both desktop and mobile devices?",
        "How might we create a user experience that's consistent with our brand and other product experiences across all devices?",
        "How might we use data and analytics to optimize the mobile transition experience over time?",
        "How might we design for accessibility in a way that's compatible with both desktop and mobile devices?",
        "How might we use mobile transition design to increase user engagement and motivation?",
        "How might we create a mobile transition experience that's easy to update and maintain?",
        "How might we use mobile transition design to build trust and credibility with our users?",
        "How might we design for a mobile transition experience that's personalized for each user's needs and preferences?",
        "How might we use mobile transition design to provide real-time support and guidance to users?",
        "How might we create a mobile transition experience that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use mobile transition design to create a seamless, cohesive user experience across all parts of our product?",
        "How might we use mobile transition design to align with our brand values and mission?",
        "How might we use mobile transition design to create a positive, inclusive user experience for all users?"
      ]
    },
    {
      "hashtag": "#UXGlobalAppeal #InclusiveDesign #CulturalSensitivity",
      "descriptions": "The UX Global Appeal prompt group focuses on designing user experiences that are accessible and appealing to users worldwide. This includes designing for different cultural backgrounds, languages, time zones, legal and regulatory requirements, and network speeds.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we design a user experience that's accessible and appealing to users worldwide?",
        "How might we create a user interface that's intuitive and easy to use for users with different cultural backgrounds and language preferences?",
        "How might we use localizations to provide a tailored user experience for different regions and countries?",
        "How might we design for accessibility and universal usability in a way that's compatible with our global user base?",
        "How might we use data and analytics to optimize the user experience for different cultural and linguistic preferences?",
        "How might we create a user experience that's consistent with our brand and other product experiences worldwide?",
        "How might we design for different time zones, currencies, and units of measurement in a way that supports a great user experience for all users?",
        "How might we use global user research and testing to inform and improve the user experience?",
        "How might we design for different legal and regulatory requirements in a way that supports a great user experience for all users?",
        "How might we create a user experience that's inclusive and respectful of diverse cultural norms and traditions?",
        "How might we use global design standards and best practices to ensure a consistent user experience worldwide?",
        "How might we design for different languages and text direction in a way that supports a great user experience for all users?",
        "How might we use global collaboration and communication to inform and improve the user experience?",
        "How might we create a user experience that's scalable and adaptable as our product and user base grows globally?",
        "How might we use global accessibility guidelines and best practices to ensure an accessible user experience for all users?",
        "How might we design for different input methods and device types in a way that supports a great user experience for all users?",
        "How might we use global user feedback and suggestions to inform and improve the user experience?",
        "How might we create a user experience that's culturally sensitive and appropriate for different regions and countries?",
        "How might we use global design trends and innovations to inform and improve the user experience?",
        "How might we design for different network speeds and connectivity types in a way that supports a great user experience for all users?"
      ],
      "name": "UX Global Appeal",
      "color": "bg-pink-500"
    },
    {
      "hashtag": "",
      "descriptions": "",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we organize and structure information to make it easy for users to find what they're looking for?",
        "How might we design for scalability and adaptability as our product and information evolves over time?",
        "How might we create an information architecture that's consistent across all devices and platforms?",
        "How might we use data and analytics to optimize the information architecture for user needs and preferences?",
        "How might we design for accessibility in a way that's compatible with our information architecture choices?",
        "How might we create an information architecture that's easy to understand and use, even for non-technical users?",
        " How might we use information architecture to build trust and credibility with our users?",
        "How might we design for information architecture that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use information architecture to encourage users to explore and discover new features and functionality?",
        "How might we design for information architecture that's easy to update and maintain?",
        "How might we use information architecture to align with our brand values and mission?",
        "How might we use information architecture to create a positive, inclusive user experience for all users?",
        "How might we use information architecture to increase the reach and impact of our product?",
        "How might we design for information architecture that's sensitive to user privacy and security concerns?",
        "How might we use information architecture to create a more efficient and streamlined user experience for all users?",
        "How might we use information architecture to stay ahead of industry trends and best practices in UX design?",
        "How might we create an information architecture that's consistent with other product experiences and systems?",
        "How might we use information architecture to foster a sense of community and connection among our users?",
        "How might we use information architecture to make the user experience more engaging and motivating?",
        "What might we use taxonomy and labeling to improve information discovery and retrieval?"
      ],
      "name": "UX Information Architecture",
      "color": "bg-purple-500"
    },
    {
      "hashtag": "#UXScalability #ScalableDesign #AdaptableUX",
      "descriptions": "Design a user experience that can grow and adapt as the product and user base evolves over time. Use data and analytics to optimize the user experience, modular design, and component-based architecture to support scalability and growth. Create a positive, inclusive user experience that's consistent across all devices and platforms, encourages exploration of new features, and fosters a sense of community and connection among users.",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we design a user experience that's scalable and adaptable as our product and user base grows over time?",
        "How might we use data and analytics to optimize the user experience for scalability and growth?",
        "How might we create a user interface that's scalable and adaptable to different screen sizes and aspect ratios?",
        "How might we design for scalability in a way that's compatible with different devices and platforms?",
        "How might we use modular design and component-based architecture to support scalability and growth?",
        "How might we design for scalability in a way that's accessible for users with disabilities?",
        "How might we create a user experience that's easy to understand and use, even as our product and user base grows?",
        "How might we use scalability to build trust and credibility with our users?",
        "How might we design for scalability in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use scalability to encourage users to explore and discover new features and functionality?",
        "How might we design for scalability in a way that's easy to update and maintain?",
        "How might we use scalability to align with our brand values and mission?",
        "How might we use scalability to create a positive, inclusive user experience for all users?",
        "How might we use scalability to increase the reach and impact of our product?",
        "How might we design for scalability in a way that's sensitive to user privacy and security concerns?",
        "How might we use scalability to create a more efficient and streamlined user experience for all users?",
        "How might we use scalability to stay ahead of industry trends and best practices in UX design?",
        "How might we create a user experience that's consistent across all devices and platforms, even as our product and user base grows?",
        "How might we use scalability to foster a sense of community and connection among our users?",
        "How might we use scalability to make the user experience more engaging and motivating for users over time?"
      ],
      "name": "UX Scalability",
      "color": "bg-gray-500"
    },
    {
      "hashtag": "",
      "descriptions": "",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "How might we design a user experience that's consistent with our brand values, mission, and messaging?",
        "How might we use design elements such as color, typography, and imagery to reinforce our brand and create a consistent user experience?",
        "How might we create a user interface that's scalable and adaptable as our brand evolves over time?",
        "How might we design for brand consistency in a way that's compatible with different devices and platforms?",
        "How might we use brand consistency to build trust and credibility with our users?",
        "How might we design for brand consistency in a way that's flexible and adaptable to different user contexts and scenarios?",
        "How might we use brand consistency to encourage users to explore and discover new features and functionality?",
        "How might we design for brand consistency in a way that's easy to update and maintain?",
        "How might we use brand consistency to align with our brand values and mission?",
        "How might we use brand consistency to create a positive, inclusive user experience for all users?",
        "How might we use brand consistency to increase the reach and impact of our product?",
        "How might we design for brand consistency in a way that's sensitive to user privacy and security concerns?",
        "How might we use brand consistency to create a more efficient and streamlined user experience for all users?",
        "How might we use brand consistency to stay ahead of industry trends and best practices in UX design?",
        "How might we create a user experience that's consistent with other product experiences and systems?",
        "How might we use brand consistency to foster a sense of community and connection among our users?",
        "How might we use brand consistency to make the user experience more engaging and motivating?",
        "How might we design for brand consistency in a way that's accessible for users with disabilities?",
        "How might we create a user experience that's easy to understand and use, even for non-technical users, while still maintaining brand consistency?",
        "How might we use data and analytics to optimize the user experience for brand consistency over time?"
      ],
      "name": "UX Brand Consistency",
      "color": "bg-blue-500"
    },
    {
      "hashtag": "",
      "descriptions": "",
      "gptVersion": [
        "gpt4",
        "default3.5"
      ],
      "promptAreas": [
        "What psychological triggers can increase user engagement in digital products?",
        "How can cognitive science improve digital product usability?",
        "What are the best practices for using memory principles in digital product design?",
        "How can we design more effective error messages and notifications using psychology?",
        "What are some best practices for using the principles of problem-solving in digital product design?",
        "How can psychology be used to design more persuasive digital products?",
        "How can we design more effective customer service for digital products using psychology?",
        "What are the best practices for using the principles of perception in digital product design?",
        "How can we design more effective post-purchase experiences for digital products with psychology?",
        "How can psychology be used to create more engaging user experiences?",
        "How can the principles of attention be used in digital product design?",
        "What are some common misconceptions about theory of mind in digital product design?",
        "How can we design more effective content for digital products using psychology?",
        "How can we design more effective search functionality with psychology in digital products?",
        "What are the best practices for using the principles of heuristics in digital product design?",
        "How can psychology be used to design more effective calls to action in digital products?",
        "How can we design more effective personalization for digital products using psychology?",
        "How can we design more effective navigation using psychology in digital products?",
        "What are the best practices for using the principles of decision-making in digital product design?",
        "How can we design more effective forms and surveys for digital products using psychology?"
      ],
      "name": "UX Psychology",
      "color": "bg-cyan-500"
    }
  ] 

  const sendData = async (data: any) => {
    data['sequential'] = false;
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
            votes: [],
            votesCount: 0,
          })
    } catch (error) {
      console.log(error)
    }
  }

  const processPrompts = () => {
    allMyPrompts.map(data => {
      // sendData(data)
    })
  }

  return (
   <>
    <button onClick={processPrompts}>Process Prompts</button>
   </>
  )
}