import { useEffect } from "react"


const Main = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".card")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("slide-in", entry.isIntersecting)

        // disable element from disappearing once it has appeared in the viewport
        if (entry.isIntersecting) observer.unobserve(entry.target)
      })
    }, {
      threshold: 1,
    })

    cards.forEach(card => {
      observer.observe(card)
    })
  }, [])

  return (
    <div className="main">
      <h1>MEMBER PRIVILEGES</h1>
      <br/>
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptatibus, possimus quaerat soluta sunt animi alias et excepturi impedit explicabo neque maxime assumenda, non dolorum aspernatur consequuntur incidunt quidem repellat?</h2>
      <br/>
      <div className="main-item-container">
        <div className="main-item-img-1">
          image here
        </div>
        <div className="main-item-card-1 card">
          <h2>DINING OPTIONS</h2>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt arcu velit, non molestie justo rhoncus vel. Vestibulum id aliquam diam. Aenean imperdiet suscipit purus nec maximus. Maecenas ut iaculis orci, eu luctus neque. 
          </p>
          <p>
            Maecenas venenatis, orci id maximus tempor, libero tellus ultrices arcu, a hendrerit nibh dui id massa. Maecenas consequat quis quam vitae mollis. Donec tincidunt hendrerit purus sed sollicitudin. Etiam vulputate interdum dui, maximus consectetur nunc tempus quis. Vestibulum malesuada, arcu vel lacinia porta, libero mi euismod dolor, vitae interdum risus sapien laoreet nunc.
          </p>
        </div>
      </div>
      <div className="main-item-container">
        <div className="main-item-card-2 card">
          <h2>EVENT HALL</h2>
          <br/>
          <p>
            Suspendisse sed rutrum turpis, et hendrerit tortor. Suspendisse semper pellentesque est, commodo maximus leo sagittis vulputate. Donec finibus sollicitudin quam, eu pretium tortor facilisis eu. Maecenas vel ipsum ullamcorper, sollicitudin quam dapibus, blandit libero. Nulla at diam eu diam pharetra commodo id et orci. Aenean justo nisl, tristique sed massa nec, porta pellentesque ipsum. Pellentesque ac vulputate dolor. Phasellus ac lorem mauris. Sed imperdiet arcu sed neque mollis, et pulvinar orci ornare.
          </p>
        </div>
        <div className="main-item-img-2">
          image here
        </div>
      </div>
      <div className="main-item-container" 
      // ref={containerRef}
      >
        <div className="main-item-img-3">
          image here
        </div>
        <div className="main-item-card-3 card">
          <h2>SWIMMING POOL</h2>
          <br/>
          <p>
            Vestibulum sed augue at nunc malesuada tempor eu ut urna. Suspendisse at mollis erat. Duis nec euismod quam. Duis eleifend tellus ipsum, ut porta nunc placerat eget. Fusce fermentum efficitur ipsum, sit amet tristique diam hendrerit id. Aliquam a bibendum nisi. Pellentesque sagittis lorem et orci viverra, sed efficitur nisi accumsan. Nullam gravida iaculis diam, sit amet mollis odio ullamcorper sed. Nulla id sem sit amet tortor efficitur placerat feugiat vitae libero. Maecenas laoreet diam nec turpis congue pulvinar. Ut ac pretium felis, vitae interdum sem. Proin gravida sodales sagittis. Donec eget fringilla ligula. In dapibus libero a blandit mattis. Nam consequat enim a arcu ultricies, ac pretium diam aliquam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main