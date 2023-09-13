# qlearn-images
Automate the creation of QLearn (Canvas) image tiles.
Our institution wanted a standard image for each course on the Dashboard. Each image was to be created from a set template, with the subject name and the school logo. As we had around 350 subjects and wanted the ability to update the template if school branding changed, an automated solution was desired! 

## Process
1. A template was created in Adobe Illustrator with a text box named SubjectName.
2. A CSV file of the unpublished courses was downloaded from QLearn. 
3. CSV file was cleaned up, removing any courses that were not a Blueprint
4. Python script was run against the CSV file, putting the grade at the front and putting the output into a list (e.g. "Digital Solutions 12" became "12 Digital Solutions")
5. Adobe Illustrator script was written to replace the text in the template with the subject names, then export each as a JPEG. 

## Instructions 
To download a CSV of all Blueprint names, you must be an admin.
Go to Admin -> Teaching and Learning -> Settings -> Reports -> Unpublished Courses and run a report. Refresh the page and you will be able to download the report as a CSV file.
Alternatively you could probably get this through OneSchool if you have the right permissions!

To clean up the CSV, I deleted all columns except the Course Name.
I then deleted any rows that did not contain the word "Blueprint". 
Next I removed the word Blueprint (Ctrl-H  Find what: Blueprint and Replace with: (nothing)). 
I sorted the list alphabetically. Since I wanted to do the subject tiles faculty by faculty, I added an extra column to list the faculty.

The Python script sorts the data into different lists for each faculty and writes to a text file. These could then be copied, one list at a time, into the Illustrator script. We had a slightly different template for each faculty.

To use an Adobe Illustrator script, go to your installation of Adobe Illustrator and find the Presets -> Scripts folder. Mine was in C:\Program Files\Adobe\Adobe Illustrator 2023\Presets\en_US\Scripts

Save the QLearn_Tiles.jsx file in that folder, and you'll be able to use it within Adobe Illustrator in the File -> Scripts menu