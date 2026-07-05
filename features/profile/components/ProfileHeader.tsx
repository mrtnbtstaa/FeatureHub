import Avatar from "@/components/shared/Avatar/Avatar";
import { createClient } from "@/lib/supabase/server/server";

const ProfileHeader = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center gap-4">
      <Avatar
        src={user?.user_metadata.avatar_url ?? "/martin.jpg"}
        alt="profile"
        width={160}
        height={160}
        className="rounded-md"
      />
      {user && (
        <div>
          <h2 className="font-bold text-4xl tracking-wide leading-none">
            {user?.user_metadata.full_name}
          </h2>
          <span className="text-md text-gray-700 tracking-wide leading-none">
            {user.email}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
