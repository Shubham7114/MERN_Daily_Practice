


const geeta =[
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचनमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मण",
    "परित्राणाय साधूनाम् विनाशाय च दुष्कृताम्।धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    "गुरूनहत्वा हि महानुभवान श्रेयो भोक्तुं भैक्ष्यमपीह लोके |हत्वार्थकामांस्तु गुरुनिहैव भुञ्जीय भोगान्रुधिरप्रदिग्धान् ||",
     "न चैतद्विद्मः कतरन्नो गरियो यद्वा जयेम यदि वा नो जयेयु: |यानेव हत्वा न जिजीविषाम- स्तेSवस्थिताः प्रमुखे धार्तराष्ट्राः ||",
     "कार्पण्यदोषोपहतस्वभावःपृच्छामि त्वां धर्म सम्मूढचेताः |यच्छ्रेयः स्यान्निश्र्चितं ब्रूहि तन्मेशिष्यस्तेSहं शाधि मां त्वां प्रपन्नम् ||",
     "न हि प्रपश्यामि ममापनुद्या-द्यच्छोकमुच्छोषणमिन्द्रियाणाम् |अवाप्य भूमावसपत्नमृद्धंराज्यं सुराणामपि चाधिपत्यम् ||",
     "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय |सिद्धयसिद्धयोः समो भूत्वा समत्वं योग उच्यते ||",
     "दुरेण ह्यवरं कर्म बुद्धियोगाद्धञ्जयबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ||",
     "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः |जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ||",
     "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति |तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ||"]

function getRandomNumber(){
    let geetas = geeta[Math.floor(Math.random() *geeta.length)]
    document.getElementById("box-container").textContent = geetas
}

genrateBtn.addEventListener("box-container", () =>{
    geeta.textContent = geeta[getRandomNumber()];
})
