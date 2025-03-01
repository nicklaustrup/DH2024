import { useAuth0 } from "@auth0/auth0-react";
/* eslint react/prop-types: 0 */
const Introduction = ({setStage, setContact}) => {
    const { user } = useAuth0();
    return (
        <div>
            <header>
                <h1 className="text-3xl font-bold underline">
                    Welcome, {user?.name || "person"}! How should people contact you?
                </h1>
            </header>
            <main className="question"><center>
                <textarea onChange={(e) => {setContact(e.target.value)}}/>
                <button onClick={() => {setStage(1)}}>Continue →</button>
            </center></main>
        </div>
    )
}

export default Introduction