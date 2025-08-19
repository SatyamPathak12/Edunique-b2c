import ContentManagement from "@/components/b2c-admin/content-management";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div>
        <ContentManagement />
    </div>
}