"use client"
import InstitueCard from "@/components/b2c-admin/AllInstitueCard";
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import BackButton from "@/components/common-components/BackButton";
import DualTabSwitcher from "@/components/common-components/DualTabSwitch";
import TabSwitch from "@/components/common-components/TabSwitch";
import { useState } from "react";

const users = Array.from({ length: 8 }, (_, i) => ({
    name: `School Name`,
    image: '/common-images/school-banner.jpg',
    address: 'Addresses',
    detail1: 'Detail 1',
    detail2: 'Detail 2',
    detail3: 'Detail 3',
    detail4: 'Detail 4',
}));

const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 2' },
    { id: 'f3', label: 'Filter 3' },
    { id: 'f4', label: 'Filter 4' },
    { id: 'f5', label: 'Filter 5' },
];

const AllInstitution = () => {
    const tabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"]
    const dualTabs = ['Online', 'Offline'];
    const [selectedTab, setSelectedTab] = useState(tabs[0])
     const [activeTab, setActiveTab] = useState(dualTabs[0]);
    return (
        <>
            <BackButton Heading="All Intitutes" />
            <AdminB2CWrapper>
                <div className="bg-white rounded-3xl p-4">
                    <SearchFilter filters={filters} />
                    <div className="my-2">
                        <DualTabSwitcher tabs={dualTabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </div>
                    <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-2">
                        {users.map((user, index) => (
                            <InstitueCard key={index} {...user} />
                        ))}
                    </div>
                </div>
            </AdminB2CWrapper>
        </>
    )
}

export default AllInstitution;