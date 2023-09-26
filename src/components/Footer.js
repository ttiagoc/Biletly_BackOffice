import React from 'react'
import { Link , NavLink} from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    <section>
        <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright&nbsp;
                <NavLink className="text-light text-decoration-none" to="/">
                    FakeShop
                </NavLink>
            </div>
        </footer>
    </section>
</div>
  )
}
