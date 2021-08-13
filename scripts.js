function imgSlider(anything){
    document.querySelector('.mainImg').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function factText1(){
    const newText = "While more women are showing an interest in science, technology, engineering, and mathematics, there is still a marked difference in the number of men versus women that persist in these fields."
    document.getElementById('funFact').innerHTML = newText;
}

function factText2(){
    document.getElementById('funFact').innerHTML = "Careers in STEM are projected to grow 8% in the next eight years, and the median salary for STEM workers in the U.S. was almost $50k more than other fields. Despite this, only 28% of U.S. STEM workers are women." + '<sup><a href="resources.html">4</a></sup>'
}

function factText3(){
    document.getElementById('funFact').innerHTML = "Recent research shows that the gender gap present in STEM is caused by a lack of self-confidence, others' perceptions about women in math and science, and a severe underrepresentation of female role models in STEM." + '<sup><a href="resources.html">7</a></sup>'
}

function gapText1() {
    document.getElementById('gapText').innerHTML = "A lack of confidence is a major reason that women don't stay in STEM-- or choose not to pursue it in the first place. A study conducted by Stanford University researchers showed correlation between a woman's self-confidence and her ability to find a lucrative job in STEM. This lack of confidence caused women to earn up to 13% less than men in the same position, and with the same skills and experience." + '<sup><a href="resources.html">7</a></sup>'
}

function gapText2() {
    document.getElementById('gapText').innerHTML = "Lowered confidence affects how women apply their STEM skills. In another study, it was found that women are more likely to leave STEM programs after taking a Calculus course due to a drastic drop in self-confidence over the length of the course. Despite women achieving similar marks to their male peers, their lack of confidence ultimately led them to leave STEM entirely." + '<sup><a href="resources.html">2</a></sup>'
}

function gapText3() {
    document.getElementById('gapText').innerHTML = "Closing the STEM gap and increasing the number of women in STEM relies on finding ways to increase their confidence in regards to their abilities in STEM subjects. There has been extensive research into the role that self-image plays in how men and women perform in STEM, and that this self-image is a major contributing factor into whether or not STEM is pursued." + '<sup><a href="resources.html">5</a></sup>'
}

function mythText1() {
    document.getElementById('mythText').innerHTML = "In the professional world, colleagues' ideas about women in STEM affect their self-efficacy. Cultural ideas about men dominating in STEM field tend to accentuate men as being more competent. Such biases often permeate school and work environment and can lead to a reduction in female representation. When women are seen as less competent, they are often passed over for promotions or positions. Men are hired instead of equally qualified women at a rate of 30%." + '<sup><a href="resources.html">6</a></sup>'
}

function mythText2() {
    document.getElementById('mythText').innerHTML = "Women are more likely to leave STEM during or after college due to negative perceptions manifesting in their self-efficacy. The playing field for men and women in STEM is unequal: the current environment is not set up to present women with the opportunity to successed in this industry. If peers and educators send the message that women must work twice as hard to achieve the same outcome, it is no wonder so many women choose to step away from STEM altogether." + '<sup><a href="resources.html">2</a></sup>'
}

function mythText3() {
    document.getElementById('mythText').innerHTML = "There is direct correlation between self-confidence and women's reasoning for leaving STEM. In one study, women switched majors away from STEM at a higher rate than their male classmates after taking Calculus. While the confidence levels of both genders decreased at the same rate over the length of the course, women entered with previously lowered confidence. The perceptions reflected upon female students of mathematics and science affect their self-efficacy to the point that, even if they actively demonstrate similar knowledge of a subject as their male peers, they are still more likely to leave STEM due to lowered confidence levels." + '<sup><a href="resources.html">2</a></sup>'
}

function repText1() {
    document.getElementById('repText').innerHTML = "Women are much more likely to enter and remain in STEM if there are strong female role models present. Men are already represented as being highly successful in these fields, as evidenced by household names like Elon Musk or Bill Gates. When someone aspires to something, they naturally look for role models they can relate to. Since women must overcome different obstacles to succeed in STEM, it is difficult for them to relate to men like Musk and Gates." + '<sup><a href="resources.html">1</a></sup>'
}

function repText2() {
    document.getElementById('repText').innerHTML = "Female representation in STEM isn't just important for women. When men fail to see women succeeding in STEM fields, it can create gender biases surrounding women's abilities; \"there aren't many female lead engineers, therefore women must be bad at engineering\", and so on. Other countries with better female representation are less likely to carry these stereotypes, as shown in places like Russia where 58% of their engineers are women." + '<sup><a href="resources.html">8</a></sup>'
}

function repText3() {
    document.getElementById('repText').innerHTML = "Placing importance on the types of women acting as role models is crucial when seeking female retention in STEM. Many women representing these fields exist at extraordinarily high levels in their careers that can appear unattainable to a younger student in an introductory computer science class. Ideally, an appropriate role model is someone who is just a few steps ahead of the aspiring engineer. An incoming college freshman will relate much better to a rising junior attending their first internship than to the CTO of a Fortune 500 company." + '<sup><a href="resources.html">1</a></sup>'
}