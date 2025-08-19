import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import BackButton from "@/components/common-components/BackButton";
import InventoryTable from "./components/InventoryTable";

const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 2' },
    { id: 'f3', label: 'Filter 3' },
    { id: 'f4', label: 'Filter 4' },
];

const Inventory = () => {

    const items = Array.from({ length: 9 }, (_, i) => ({
        id: i,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum',
        stock: 12,
        image: '/principal/school-login-banner.png', // Change this to a valid local image or remote URL
    }));
    return (
        <>
            <BackButton Heading="Inventory" />
            <AdminB2CWrapper>
                <div className="bg-white rounded-3xl">
                    <div className="px-4">
                        <SearchFilter filters={filters} />
                    </div>
                    <InventoryTable data={items} />
                    
                </div>
            </AdminB2CWrapper>
        </>
    )
}
export default Inventory;