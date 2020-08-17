Team 74(RUNTIME TERROR)

The whole model consist of 3 main chains:
1) A website
2) A Mobile Application
3) A WhatsApp Chat Bot

1=>Technologies used=>ReactJS on the front end and Django on the backend
The web site consist of the user (teacher) and the admin(principal) 's login as well as registration.
The web site starts from a dash board where the teacher logged in can view the list of all the students in his/her class.
Then on clicking on one of the student she/he can basically get two options:
a] To go to the student survey
b] To go to see the visual representation of the analysis of the past week

2=>Technologies Used => Flutter (Native Application creation for crossplatform =>Android as well as IOS)
The platform is basically created to help the teacher upload data even without
internet connection as we get access to the local database in the phone. 
The teacher can upload the response analysis for each student and can see visual representation for them as well. 
The app also consist of the facility to work at low internet connectivity.

3=>Technologies Used=>Twilio , Flask and WhatsApp for hosting
The work flow is basically to create a chat bot to help the Teachers in the government schools who do not like the
cumbersome process of entering data in spread sheets and are not 
well worsed with the modern technology.
The chat bot hits with the first question as soon as 'Hey or hi or hiii' is types.
Then the chat bot will keep sending questions in chronological order as soon as the teacher enters the answer to it.
This will go on till all questions with the reason have been answered.
This is basically made to assist the teachers to work on whats app rather than downloading a new seperate app.

FUTURE GOALS
We would like to integrate the generalised questions rather than all 31 questions as suggested by the organisation. Instead we shall 
give them fewer questions based on 3 main pillars of analysis and do entity extraction usinfg NLP and then in the db we shall check those fields that match those 31 questions in the db . This will even save the teachers time to answer all 31 questions .
We shall all use Tessaract Photo OCR to help teacher take in the picture of student compositions which will be converted to text readable and then do text summarization using NLP to break down the text to 10% or 25% or say 30% of the total text as required. This shall save whole lot of time rather than reading whole composition of students.
