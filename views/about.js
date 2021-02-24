new fullpage('#fullpage', {
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    onLeave: (origin, destination, direction)=>{
      const section = destination.item;
      const title = section.querySelector("h2");
      const t1 = new TimelineMax({delay: 0.5});
      t1.fromTo(title, 0.5, {y:"50", opacity:0}, {y: "0",opacity: 1,ease: Power2.easeInOut});
    }
  });