import React from 'react';
import Header from "../../components/Header/index";
import ProgressBar from "../../components/ProgressBar/index";
import TopicTranscript from "../../components/TopicTranscript/index";
import TopicNavigation from "../../components/TopicNavigation/index";
import Footer from "../../components/Footer/index";
import './TopicPage.css'
import TopicVideo from "../../components/TopicVideo";

const TopicPage = () => {
    const topicTranscriptText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique.Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam. Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem situm in nobis ut et voluptates et dolores nasci fatemur e corporis voluptatibus et doloribus -- itaque concedo, quod modo dicebas, cadere causa, si qui incurrunt, numquam vim tantam."
    return (
        <div className="flex flex-col h-screen bg-primary-600 overflow-hidden no-scrollbar ">
          <Header text={"Topic"}/>
          <div className="flex flex-col flex-1 px-4 gap-6 pt-2">
            <div className={'flex flex-col gap-2 py-2'}>
              <ProgressBar color={"bg-success"} completed={56} totalTopics={100}/>
              <p className="text-greyscale-500 text-headline-medium font-montserrat">
                Middle subtopic
              </p>
              <TopicVideo></TopicVideo>
            </div>
            <div className="flex-1">
              <TopicTranscript text={topicTranscriptText}></TopicTranscript>
            </div>
            <TopicNavigation leftButtonText="Previous" rightButtonText="Next"/>
            <Footer variant={'home'}/>
          </div>

        </div>
    )
}

export default TopicPage;