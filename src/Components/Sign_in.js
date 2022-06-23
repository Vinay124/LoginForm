import React from 'react'
import '../Styles/app.css'


export default function Sign_in() {
  return (
    <>
    <section>
      <div>
        <div>
          <h1>Welcome Login</h1>
        </div>
        <div>
          <form>
            <div>
              <input type="email" id="email" name="email" placeholder="Enter UserName or Email"/>
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="Please Enter Password"/>
            </div>
            <input type="checkbox" id="checkbox"/>
          </form>
        </div>
      </div>
    </section>
  </>
  )
}

