const Signup = () => {

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="signup">
      <h2>SIGN UP NOW!</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="Mobile Number"/>
        <textarea rows='3' placeholder="Type additional message here..."></textarea>
        <input type="submit" value="SIGN UP"/>
      </form>
    </div>
  )
}

export default Signup