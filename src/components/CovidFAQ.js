import React from 'react';

const CovidFaq = () => {
    return(
        <div className="col-md-10 offset-md-1">
            <h2 className="header">About COVID-19</h2>
            <p>The Coronavirus(COVID-19) is a devastating respiratory illness with fatal potential. 
            It that mainly spreads through respiratory droplets which can be exchanged through close person-to-person interactions.
            Actions such as sneezing, coughing, or just normal talking have the chance to transfer to individuals and infect them</p>

            <p>The virus is at its highlest likelihood of transmission when people are within 6 feet of each other.
            The virus can also be spread by people without symptoms, which is why mandatory measures have been instituted across the globe for citizens to wear masks in public.
            If contracted, the virus typically incubates within people for 14 days.</p>
            
            <h2 className="header">How Covid-Conscious Can Help</h2>
            <p>
            Outside of wearing a mask, the best thing we can do to combat the pandemic is be cognizant of our behavior and encourage others to do the same.
            We need to work in unison to minimize the risk keep us, our loved ones, and the strangers around us free from Coronavirus.</p>
            <p>Everybody should be staying inside to minimize their chance, but if you have to go out, it's smart keep a log of where you've been and how many people you've come in contact with.
             That way, if you find out later that someone contracted Covid at a location you logged in the last 14 days, you know that you need to get yourself tested. 
            Covid-Conscious allows you to create and save logs, and keeps track of how many people you've come in contact with in the last 14 days. 
            When you look back at how many people you've come in contact with in the last two weeks, and multiply that exponentially by how many people each one of those people has come in contact with, the potential for contact tracing is staggering.
            That's why you need to keep track of your social activity. To know your risk and prevent things from getting out of hand.
            </p>
            <p>More COVID-19 information can be found on <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">The Center for Disease Control's website</a> </p>
        </div>
    )
}

export default CovidFaq;