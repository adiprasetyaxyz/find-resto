const aboutUs = {
  async render() {
    return `
          <h2 id='mainContent' tabindex="0">About Us</h2>
          <p id='aboutme'>My Name is Adi Prasetyawan I was born in 1998 Denpasar, and after completing my education at the high school level, life began to teach me many new things. Currently, I am on an exciting journey to reach my dream of becoming a software developer.

          I've always felt a strong pull towards the world of technology and computers from a young age. This passion led me to make a serious decision to step into the field of software development. Right now, I'm fully focused on the learning process, striving to grasp programming languages, application concepts, and all the technical aspects that will help me succeed in this industry.
          
          Throughout this journey, I've come to understand that learning never truly ends. While my ultimate goal is to become a proficient professional in software development, I'm also learning to appreciate every moment in this process. With unwavering determination and endless enthusiasm, I believe that success as a software developer is only a matter of time and the dedication I invest. I'm currently writing the story of my life in the world of technology, and I'm very excited to see how these pages will fill up with new achievements I'll attain.</p>
        `;
  },

  async afterRender() {
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default aboutUs;
