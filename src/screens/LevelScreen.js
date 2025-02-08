import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LevelScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { level } = route.params;

  // Function to navigate to the MCQ page with level-specific questions
  const attemptMCQ = () => {
    // Define the set of MCQs for each level
    const levelQuestions = {
      1: [
        {
          question: "What happens to the body when a person has a fever?",
          options: ["The body temperature goes up", "The body temperature goes down", "The person feels very hungry", "The person feels no change"],
          correctAnswer: "The body temperature goes up"
        },
        {
          question: "What is the normal body temperature of a healthy person?",
          options: ["37°C (98.6°F)", "40°C (104°F)", "35°C (95°F)", "42°C (107.6°F)"],
          correctAnswer: "37°C (98.6°F)"
        },
        {
          question: "Which of the following can cause fever?",
          options: ["Infections", "Too much exercise", "Eating spicy food", "Drinking cold water"],
          correctAnswer: "Infections"
        },
        {
          question: "Which symptom is common in fever?",
          options: ["High body temperature", "Chills and sweating", "Weakness and tiredness", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          question: "What can happen if fever is very high?",
          options: ["The person may feel normal", "The person may have seizures (fits)", "The person will feel stronger", "The person will feel very hungry"],
          correctAnswer: "The person may have seizures (fits)"
        }
      ],
      2: [
        {
          question: "What is ringworm?",
          options: ["A skin infection caused by a worm", "A fungal infection of the skin", "A bacterial infection", "A type of allergy"],
          correctAnswer: "A fungal infection of the skin"
        },
        {
          question: "Why is it called 'ringworm'?",
          options: ["It is caused by a worm", "It looks like a red circular ring on the skin", "It is found only in rings", "It causes worms to grow in the body"],
          correctAnswer: "It looks like a red circular ring on the skin"
        },
        {
          question: "Which part of the body can be affected by ringworm?",
          options: ["Skin", "Scalp", "Nails and feet", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          question: "How can ringworm spread from one person to another?",
          options: ["Through direct skin contact", "By touching infected animals", "By sharing clothes, towels, or combs", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          question: "What does a ringworm infection look like?",
          options: ["A white dry patch", "A red circular rash with clear skin in the center", "A yellow swelling", "Small black dots"],
          correctAnswer: "A red circular rash with clear skin in the center"
        }
      ],
      3: [
        {
          question: "What is diarrhea?",
          options: ["Passing hard stools", "Passing loose, watery stools more than 3 times a day", "Feeling hungry all the time", "Having a bloated stomach"],
          correctAnswer: "Passing loose, watery stools more than 3 times a day"
        },
        {
          question: "Which of the following is a common cause of diarrhea?",
          options: ["Drinking dirty water", "Eating spoiled or contaminated food", "Poor hygiene (not washing hands)", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          question: "Which type of food can worsen diarrhea?",
          options: ["Spicy and oily food", "Plain rice and boiled potatoes", "Bananas", "Coconut water"],
          correctAnswer: "Spicy and oily food"
        },
        {
          question: "What can happen if a person with diarrhea does not drink enough fluids?",
          options: ["The person will feel stronger", "The person may become dehydrated", "The diarrhea will stop immediately", "The person will gain weight"],
          correctAnswer: "The person may become dehydrated"
        },
        {
          question: "Which sign shows that a person is dehydrated?",
          options: ["Dry mouth and dizziness", "Urinating frequently", "Gaining weight", "Feeling energetic"],
          correctAnswer: "Dry mouth and dizziness"
        }
      ],
      7: [
        {
          question: "What is the causative agent of typhoid fever?",
          options: ["Escherichia coli", "Salmonella Typhi", "Vibrio cholerae", "Mycobacterium tuberculosis"],
          correctAnswer: "Salmonella Typhi"
        },
        {
          question: "How is typhoid primarily transmitted?",
          options: ["Airborne droplets", "Contaminated food and water", "Mosquito bites", "Direct skin contact"],
          correctAnswer: "Contaminated food and water"
        },
        {
          question: "Which of the following is NOT a common symptom of typhoid fever?",
          options: ["High fever", "Rash with rose-colored spots", "Joint pain", "Abdominal pain"],
          correctAnswer: "Joint pain"
        },
        {
          question: "What is the incubation period of Salmonella Typhi?",
          options: ["1–3 days", "6–12 hours", "1–3 weeks", "4–6 weeks"],
          correctAnswer: "1–3 weeks"
        },
        {
          question: "Which test is commonly used for the diagnosis of typhoid?",
          options: ["Widal test", "ELISA test", "Mantoux test", "Western blot test"],
          correctAnswer: "Widal test"
        },
        {
          question: "What is the primary treatment for typhoid fever?",
          options: ["Antiviral drugs", "Antibiotics", "Chemotherapy", "Painkillers only"],
          correctAnswer: "Antibiotics"
        },
        {
          question: "Which of the following antibiotics is commonly prescribed for typhoid fever?",
          options: ["Amoxicillin", "Ciprofloxacin", "Tetracycline", "Penicillin"],
          correctAnswer: "Ciprofloxacin"
        },
        {
          question: "What organ is most affected by typhoid fever?",
          options: ["Lungs", "Kidneys", "Intestines", "Heart"],
          correctAnswer: "Intestines"
        },
        {
          question: "Which of the following is an effective way to prevent typhoid fever?",
          options: ["Avoiding dairy products", "Drinking clean, boiled, or purified water", "Wearing a face mask", "Taking vitamin supplements"],
          correctAnswer: "Drinking clean, boiled, or purified water"
        },
        {
          question: "Which vaccine is used to prevent typhoid?",
          options: ["BCG vaccine", "MMR vaccine", "Hepatitis B vaccine", "Typhoid vaccine"],
          correctAnswer: "Typhoid vaccine"
        }
      ],
      8: [
        {
          question: "What is the causative agent of dengue fever?",
          options: ["Plasmodium falciparum", "Dengue virus (DENV)", "Salmonella Typhi", "Vibrio cholerae"],
          correctAnswer: "Dengue virus (DENV)"
        },
        {
          question: "How is dengue fever transmitted?",
          options: ["Contaminated food and water", "Airborne droplets", "Mosquito bites (Aedes aegypti)", "Direct person-to-person contact"],
          correctAnswer: "Mosquito bites (Aedes aegypti)"
        },
        {
          question: "What is the common name for the severe muscle and joint pain associated with dengue?",
          options: ["Breakbone fever", "Yellow fever", "Rocky Mountain spotted fever", "Typhoid fever"],
          correctAnswer: "Breakbone fever"
        },
        {
          question: "Which of the following is a warning sign of severe dengue?",
          options: ["Mild fever", "Severe abdominal pain and bleeding", "Skin rashes that disappear within hours", "Cough and cold"],
          correctAnswer: "Severe abdominal pain and bleeding"
        },
        {
          question: "Which diagnostic test is used for early detection of dengue?",
          options: ["Widal test", "NS1 Antigen Test", "Mantoux test", "ELISA for HIV"],
          correctAnswer: "NS1 Antigen Test"
        },
        {
          question: "What is the primary treatment for dengue fever?",
          options: ["Antibiotics", "Antiviral drugs", "Supportive care with fluids and pain relievers", "Chemotherapy"],
          correctAnswer: "Supportive care with fluids and pain relievers"
        },
        {
          question: "Why should aspirin and ibuprofen be avoided in dengue treatment?",
          options: ["They increase platelet production", "They can cause excessive bleeding", "They lower body temperature too much", "They make the virus spread faster"],
          correctAnswer: "They can cause excessive bleeding"
        },
        {
          question: "What is the best way to prevent dengue fever?",
          options: ["Taking antibiotics", "Drinking boiled water", "Eliminating mosquito breeding sites", "Getting an annual flu shot"],
          correctAnswer: "Eliminating mosquito breeding sites"
        },
        {
          question: "Dengue fever is most commonly found in:",
          options: ["Cold and dry regions", "Tropical and subtropical regions", "Desert areas", "Polar regions"],
          correctAnswer: "Tropical and subtropical regions"
        },
        {
          question: "What is the name of the dengue vaccine available in some countries?",
          options: ["BCG", "Dengvaxia", "Rabivax", "Covaxin"],
          correctAnswer: "Dengvaxia"
        }
      ],
      9: [
        {
          question: "What is the causative agent of cholera?",
          options: ["Salmonella Typhi", "Vibrio cholerae", "Escherichia coli", "Plasmodium falciparum"],
          correctAnswer: "Vibrio cholerae"
        },
        {
          question: "How is cholera primarily transmitted?",
          options: ["Airborne droplets", "Contaminated food and water", "Mosquito bites", "Direct contact with infected individuals"],
          correctAnswer: "Contaminated food and water"
        },
        {
          question: "What is a characteristic symptom of cholera?",
          options: ["High fever with chills", "Bloody diarrhea", "Profuse watery diarrhea ('rice-water stools')", "Skin rash with blisters"],
          correctAnswer: "Profuse watery diarrhea ('rice-water stools')"
        },
        {
          question: "Which of the following is the most critical treatment for cholera patients?",
          options: ["Painkillers", "Antibiotics", "Oral Rehydration Solution (ORS)", "Blood transfusion"],
          correctAnswer: "Oral Rehydration Solution (ORS)"
        },
        {
          question: "Which part of the body does Vibrio cholerae mainly affect?",
          options: ["Lungs", "Intestines", "Kidneys", "Brain"],
          correctAnswer: "Intestines"
        },
        {
          question: "Which of the following is NOT a common symptom of cholera?",
          options: ["Severe dehydration", "Vomiting", "High fever", "Muscle cramps"],
          correctAnswer: "High fever"
        },
        {
          question: "What is the main cause of death in cholera patients?",
          options: ["Bacterial toxicity", "Severe dehydration and electrolyte imbalance", "Liver failure", "Cardiac arrest due to fever"],
          correctAnswer: "Severe dehydration and electrolyte imbalance"
        },
        {
          question: "Which diagnostic test is commonly used to confirm cholera?",
          options: ["Widal test", "Stool culture", "Dengue NS1 test", "X-ray"],
          correctAnswer: "Stool culture"
        },
        {
          question: "Which of the following vaccines is used to prevent cholera?",
          options: ["BCG", "Dukoral", "MMR", "Hepatitis B"],
          correctAnswer: "Dukoral"
        },
        {
          question: "Which of the following measures helps prevent cholera?",
          options: ["Drinking only purified water", "Avoiding antibiotics", "Wearing a face mask", "Getting a tetanus shot"],
          correctAnswer: "Drinking only purified water"
        }
      ],
      10: [
        {
          question: "What is cancer?",
          options: ["A viral infection", "Uncontrolled growth and spread of abnormal cells", "A type of bacterial disease", "A hereditary disorder"],
          correctAnswer: "Uncontrolled growth and spread of abnormal cells"
        },
        {
          question: "What is the process by which cancer spreads to other parts of the body?",
          options: ["Mutation", "Metastasis", "Apoptosis", "Angiogenesis"],
          correctAnswer: "Metastasis"
        },
        {
          question: "Which of the following is a risk factor for developing cancer?",
          options: ["Smoking and tobacco use", "Obesity", "Exposure to UV radiation", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          question: "Which type of cancer affects the blood and bone marrow?",
          options: ["Carcinoma", "Sarcoma", "Leukemia", "Lymphoma"],
          correctAnswer: "Leukemia"
        },
        {
          question: "Which of the following is a common method for diagnosing cancer?",
          options: ["Biopsy", "ECG", "EEG", "Spirometry"],
          correctAnswer: "Biopsy"
        },
        {
          question: "What does chemotherapy do in cancer treatment?",
          options: ["Stimulates white blood cell production", "Uses drugs to kill or slow the growth of cancer cells", "Heals cancer cells to function normally", "Replaces cancerous cells with healthy ones"],
          correctAnswer: "Uses drugs to kill or slow the growth of cancer cells"
        },
        {
          question: "Which of the following viruses is linked to cervical cancer?",
          options: ["Hepatitis C", "HIV", "Human Papillomavirus (HPV)", "Epstein-Barr virus"],
          correctAnswer: "Human Papillomavirus (HPV)"
        },
        {
          question: "What is the most common type of cancer worldwide?",
          options: ["Brain cancer", "Lung cancer", "Pancreatic cancer", "Thyroid cancer"],
          correctAnswer: "Lung cancer"
        },
        {
          question: "Which of the following is NOT a type of cancer treatment?",
          options: ["Chemotherapy", "Radiation therapy", "Immunotherapy", "Bowel preparation"],
          correctAnswer: "Bowel preparation"
        },
        {
          question: "How can cancer be prevented?",
          options: ["Regular screenings", "Healthy lifestyle choices", "Vaccination (e.g., HPV vaccine)", "All of the above"],
          correctAnswer: "All of the above"
        }
      ]
    };
    

    // Get the questions for the current level
    const questions = levelQuestions[level] || [];

    // Navigate to the MCQ page with the questions for the current level
    navigation.navigate("MCQ", { level, questions });
  };

  // Dynamic content based on level
  const levelContent = {
    1: {
      title: "Fever Awareness",
      image: "",
      description: [
        "Fever is an increase in body temperature, usually due to an infection.",
        "It is a natural way the body fights bacteria and viruses.",
        "Normal body temperature is 37°C (98.6°F), and fever is when the temperature goes above 38°C (100.4°F).",
        "Common causes include infections (e.g., cold, flu, malaria, dengue) and dirty surroundings.",
        "Symptoms include high body temperature, weakness, chills, headache, and loss of appetite.",
        "Home remedies include drinking plenty of water, rest, and using a damp cloth to cool the body.",
        "Consult a doctor if the fever exceeds 39°C (102°F), lasts more than 3 days, or is accompanied by difficulty breathing."
      ]
    },
    2: {
      title: "Ringworm Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Ringworm is a fungal skin infection, not caused by worms, and causes red, circular, itchy rashes.",
        "It can affect the skin, scalp, feet, and nails.",
        "Symptoms include a circular rash, itchy and cracked skin, and hair loss (especially on the scalp).",
        "Treatment includes applying antifungal creams and keeping the skin clean and dry.",
        "If the infection doesn’t improve in 2 weeks or spreads, seek medical help."
      ]
    },
    3: {
      title: "Diarrhea Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Diarrhea is when a person has loose, watery stools more than three times a day.",
        "Causes include contaminated food or water, infections, or food intolerances.",
        "Symptoms include frequent watery stools, stomach cramps, and nausea.",
        "Home remedies include staying hydrated with ORS, eating soft foods, and resting.",
        "Consult a doctor if diarrhea lasts more than 3 days or if there is blood in the stool."
      ]
    },
    4: {
      title: "Food Poisoning Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Food poisoning is caused by eating contaminated food with harmful bacteria or viruses.",
        "It can be caused by undercooked meat, unclean water, or poor hygiene.",
        "Symptoms include stomach cramps, nausea, vomiting, and diarrhea.",
        "Treatment involves drinking fluids, eating light foods, and avoiding spicy or raw foods.",
        "Consult a doctor if symptoms persist for more than 2 days or if there is severe dehydration."
      ]
    },
    5: {
      title: "Chickenpox Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Chickenpox is a viral infection that causes red, itchy spots that turn into blisters.",
        "It spreads through airborne droplets or direct contact with an infected person’s blisters.",
        "Symptoms include fever, fatigue, headache, and a rash that turns into fluid-filled blisters.",
        "Treatment includes antihistamines for itching, paracetamol for fever, and rest.",
        "Prevent chickenpox through vaccination and avoiding close contact with infected individuals."
      ]
    },
    6: {
      title: "Diabetes Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Diabetes is a condition where the body cannot regulate blood sugar levels properly.",
        "Types include Type 1, Type 2, and Gestational diabetes, each with different causes and treatment plans.",
        "Symptoms include excessive thirst, frequent urination, unexplained weight loss, and fatigue.",
        "Management involves lifestyle changes, medication, and monitoring blood sugar levels.",
        "Prevent Type 2 diabetes by eating a healthy diet, exercising regularly, and maintaining a healthy weight."
      ]
    },
    7: {
      title: "Typhoid Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Typhoid is a bacterial infection caused by Salmonella Typhi, spread through contaminated food or water.",
        "Symptoms include high fever, weakness, abdominal pain, and loss of appetite.",
        "Treatment involves antibiotics, hydration, and rest.",
        "Prevent Typhoid through vaccination, drinking clean water, and proper handwashing."
      ]
    },
    8: {
      title: "Dengue Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Dengue fever is a mosquito-borne viral infection caused by the Dengue virus.",
        "Symptoms include high fever, severe headache, pain behind the eyes, and muscle pain.",
        "Supportive care like hydration and rest are essential for management.",
        "Prevent dengue by eliminating mosquito breeding sites and using repellents."
      ]
    },
    9: {
      title: "Cholera Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Cholera is caused by the Vibrio cholerae bacteria and leads to severe diarrhea and dehydration.",
        "Symptoms include profuse watery diarrhea, dehydration, vomiting, and muscle cramps.",
        "Treatment involves oral rehydration solution (ORS), IV fluids, and antibiotics.",
        "Prevent cholera through clean water, proper sanitation, and hygiene."
      ]
    },
    10: {
      title: "Cancer Awareness",
      image: "/src/assets/game/image.png",
      description: [
        "Cancer is characterized by uncontrolled cell growth, which can invade nearby tissues and spread.",
        "Risk factors include genetic mutations, carcinogens, poor lifestyle, and viral infections.",
        "Common types of cancer include lung, breast, and prostate cancer.",
        "Treatment involves surgery, radiation, chemotherapy, and immunotherapy.",
        "Prevent cancer by avoiding tobacco, maintaining a healthy diet, and protecting against UV rays."
      ]
    }
  };


  const levelData = levelContent[level] || {
    title: "Level Content",
    description: ["Content for this level will be added soon.", "Stay tuned for more information!"]
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>{levelData.title}</Text>
          {levelData.description.map((line, index) => (
            <Text key={index} style={styles.description}>{line}</Text>
          ))}

          {/* Attempt MCQ Button */}
          <TouchableOpacity style={styles.button} onPress={attemptMCQ}>
            <Text style={styles.buttonText}>Attempt MCQ</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eaf4fc", // Light blue background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  scrollView: {
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007bff", // Blue color for the title
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#0066cc", // Darker blue for description
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#0056b3", // Dark blue for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
