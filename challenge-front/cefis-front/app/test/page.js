const url = "http://localhost:8000";

export default async function Page() {

    const res = await fetch(url + "/user/3");
    const data = await res.json();

    return(
        <div>
            <p>{data.user.first_name}</p>
        </div>
    );
}