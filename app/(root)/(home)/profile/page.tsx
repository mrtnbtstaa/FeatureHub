import Divider from "@/components/shared/Divider/Divider";
import ProfileContent from "@/features/profile/components/ProfileContent";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import TabbarContent from "@/features/profile/components/TabbarContent";

const ProfilePage = () => {
  return (
    <section>
      <ProfileHeader />
      <TabbarContent />
      <Divider />
      <ProfileContent />
    </section>
  );
};

export default ProfilePage;
