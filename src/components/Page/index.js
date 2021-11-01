import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import PageContent from '../PageContent';

function Page({currentPage}) {

    const changePage = () => {
        switch(currentPage.name) {
            case 'About Me': 
                return <About/>
            case 'Portfolio':
                return <Portfolio/>
            case 'Contact':
                return <Contact/>
            default: 
                return <About/>
        }
    }

    return (
        <div>
            <PageContent>{changePage()}</PageContent>
        </div>
    )

}

export default Page;