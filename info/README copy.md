**HOW TO ADD A NEW PROJECT**

_To add a new project or filter option to the Projects page of your website, you will need to update both the projects.json file and potentially the projects.html file, depending on whether you're adding a new filter category. Below is a step-by-step guide on how to perform each action._

_1. Update projects.json:_
Open projects.json in your preferred code editor.
Add a new object to the array with the following structure:

{
  "id": <next_sequential_id>,
  
  "partner": "<Partner_Name>",
  
  "year": "<Year_of_Project>",
  
  "course": ["<Course_Code>"],
  
  "representatives": ["<Representative_Name_1>", "<Representative_Name_2>"],
  
  "students": ["<Student_Name_1>", "<Student_Name_2>", "..."],
  
  "desc": "<Description_of_Project>",
  
  "logo": "<Path_to_Logo_Image>",
  
  "pdf": "<Path_to_Project_PDF>",
  
  "sdg": ["<sdg_1>", "<sdg_2>", "..."],
  
  "tech": ["<tech_1>", "<tech_2>", "..."]
  
}
* Replace placeholders with actual project details. Ensure image paths and PDF paths are correct and files are uploaded to the server.


_2. Commit and Push Changes:_
- Save your changes in projects.json.
- Use git add, git commit, and git push to push the changes to the GitHub repository.

Notes:
Be careful with JSON syntax; ensure that commas, quotes, and brackets are correctly placed to avoid errors.
It's good practice to validate your JSON file after making changes to ensure there are no syntax errors.
Always back up your files before making significant changes.
For the new project details, ensure you have permissions to use any images or documents you are linking to.
