import csv

business = []
design_tech = []
eLearning = []
english = []
hpe = []
humanities = []
languages = []
mathematics = []
myPB = []
performing_arts = []
ballet = []
science = []
vet = []
visual_arts = []

with open("SubjectNames.csv") as file:
    subject_reader = csv.reader(file)
    for row in subject_reader:
        subject_name = row[0].strip()
        if any(c.isdigit() for c in subject_name):
            subject_name = subject_name[-2:] + " " + subject_name[0:-3]
        faculty = row[1].strip()
        match faculty:
            case "Business":
                business.append(subject_name)
            case "Design Tech":
                design_tech.append(subject_name)
            case "eLearning":
                eLearning.append(subject_name)
            case "English":
                english.append(subject_name)
            case "HPE":
                hpe.append(subject_name)
            case "Humanities":
                humanities.append(subject_name)
            case "Languages":
                languages.append(subject_name)
            case "Mathematics":
                mathematics.append(subject_name)
            case "MyPB":
                myPB.append(subject_name)
            case "Performing Arts":
                performing_arts.append(subject_name)
            case "QLDBallet":
                ballet.append(subject_name)
            case "Science":
                science.append(subject_name)
            case "VET":
                vet.append(subject_name)
            case "Visual Arts":
                visual_arts.append(subject_name)

with open('subject_names.txt', 'w') as f:
    f.write(str(business))
    f.write(str(design_tech))
    f.write(str(eLearning))
    f.write(str(english))
    f.write(str(hpe))
    f.write(str(humanities))
    f.write(str(languages))
    f.write(str(mathematics))
    f.write(str(myPB))
    f.write(str(performing_arts))
    f.write(str(ballet))
    f.write(str(science))
    f.write(str(vet))
    f.write(str(visual_arts))