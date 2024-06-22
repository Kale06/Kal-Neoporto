import { Container } from "@mui/material";

export function Header() {
    return (
        <header>
            <Container maxWidth="lg">
                <ul className='desktop'>
                    <li>
                        <h2 style={{
                            lineHeight: '0.8',
                        }}
                         className="highlight">
                            Muhammad<br/>Haikal
                        </h2>
                    </li>
                    <li>
                        <p>ID-Jakarta/</p>
                        <p>MY-Selangor</p>
                    </li>
                    <li>
                        <p>Poke me</p>
                        <div style={{
                            display:'flex',
                            width: '100px',
                            justifyContent: 'space-between',
                        }}>
                            <p>LinkedIn</p>
                            <p>Email</p>
                        </div>
                    </li>
                    <li>
                        <p>About me & purpose of this web</p>
                        <p>Stuff I co-/created</p>
                        <p>My Spotify Playlist</p>
                    </li>
                </ul>
            </Container>
        </header>
    )
}