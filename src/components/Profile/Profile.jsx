const Profile = () => {

    const localUser = JSON.parse(localStorage.getItem("userName"));

  return (
    <div className="text-center pt-[130px] font-bold">
        <span className="text-red-700 text-2xl">{localUser.name}</span>
    </div>
  )
}

export default Profile