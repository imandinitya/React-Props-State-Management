import UserInfo from "./userinfo";

function UserProfile(){
    const Name = "Alice";
    const Age = 30;

    return (
        <div>
            <UserInfo name={Name} age={Age} />
        </div>
    );
}

export default UserProfile;