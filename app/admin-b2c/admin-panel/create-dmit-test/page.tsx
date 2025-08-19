"use client"

import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import BackButton from "@/components/common-components/BackButton";
import TabSwitchTest from "@/components/common-components/TabSwitchTest";
import { useState } from "react";
import CreateTest from "./components/CreateTest";
import ReviewQuestion from "./components/ReviewQuestion";
import TestDetails from "./components/TestDetails";
import "./test.css"

const CreateDmitTest = () => {
    const tabs = ['DMIT Test Details', 'DMIT Test Questionnaire', 'Review']; // Normal string array

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const headingMap = {
        'DMIT Test Details': 'Create New DMIT Test',
        'DMIT Test Questionnaire': 'Test Details',
        'Review': 'Review Questions',
    } as Record<string, string>;


    return (
        <>
            <BackButton Heading={headingMap[selectedTab]} />
            <AdminB2CWrapper>
                <div className="bg-white text-black rounded-2xl">
                    <TabSwitchTest
                        tabs={tabs}
                        selected={selectedTab}
                        onChange={setSelectedTab}
                    />
                    {selectedTab === "DMIT Test Details" && (
                        <CreateTest setSelectedTab={setSelectedTab}/>
                    )}
                    {selectedTab === "DMIT Test Questionnaire" && (
                        <TestDetails setSelectedTab={setSelectedTab}/>
                    )}
                    {selectedTab === "Review" && (
                        <ReviewQuestion setSelectedTab={setSelectedTab}/>
                    )}
                </div>
                    
            </ AdminB2CWrapper>

        </>
    )
}

export default CreateDmitTest;