# belly_button_challenge

The working dashboard can be found at https://danielmilesrose.github.io/

In this project we created a functioning interactive dashboard with Javascript to
sort through and compare different test subjects in a study of the bacteria in human
belly-buttons.  This data examined the number of bacterial species (Operational Taxonomic
Units, or OTUs) that are present in human navels.\
\
On this dashboard, we have a drop-down selection menu, from which the user can select an\
individual from the study.\
\
When the individual is selected (by ID number), the dashboard is updated with a horizontal 
bar chart that shows the top 10 OTUs present in their specific belly-button, a bubble chart
that visualizes the different types and amount per types of OTUs are in that person's belly-
button, and a panel with their demographic metadata (age, ethnicity, gender, etc.).  These 
charts and panels all update when the drop-down selector is changed to another ID.\
\
References \
Finding keys/values -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys \
Using Object.entries() -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries \
Changing colors on Bubble Chart -- https://plotly.com/javascript/colorscales/ 
