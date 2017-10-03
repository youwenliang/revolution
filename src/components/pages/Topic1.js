import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';

var modalId;

class TopicA extends Component {
  componentDidMount() {
    document.title = "Za-Tone | 自我認識";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Init Swiper */
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      simulateTouch: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0,
      breakpoints: {
        // when window width is <= 960px
        960: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

    /* Preload Image */
    var images  = [];
    // images.push('/images/large.jpg');

    loadImage(images)
    .then(function (allImgs) {
      setTimeout(function(){
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
      }, 400);
      console.log(allImgs.length, 'images loaded!', allImgs);
    })
    .catch(function (err) {
      console.error('One or more images have failed to load :(');
      console.error(err.errored);
      console.info('But these loaded fine:');
      console.info(err.loaded);
    });
  };

  state = {
    open: false,
  };

  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  modalContent = (a) => {
    switch(a) {
      case "1":
        return (
          <div className="ph4 es h-100">
            <div className="w-100 h5 mb3 bg-near-white"></div>
            <h1>Slide 1</h1>
            <p>How Google Designers Adapt MaterialMaterial Design provides a set of tools and guidance to help you make informed decisions about the different UX design directions you could take when creating an app. But what happens when the guidelines don’t fit your product needs? And what happens at Google when a designer is working on a product that doesn’t quite fit the guidelines?The Material guidelines adapt. In this article we’ll look at two Google apps — Keep and Inbox — to understand how they not only bend some of the rules, but how they help shape the Material Design guidelines as a whole.Inbox: Exploring the typographic gridDesigning a new email web application is an extremely ambitious undertaking at Google, especially when it appears alongside an established product like Gmail. The Inbox team set out to create a denser UI as well as a unique user experience and brand identity while playing by the new Material Design rules. While the Inbox design team was putting together their initial designs, Material Design was still being developed. This presented the team with a great opportunity: The potential to establish what the Material Design web standards could be, while solving the problem of designing for dense UIs.Designing dense UIsThe initial design for Inbox wasn’t flexible enough, as the grid only had space for seven emails on a 13-inch screen. This was far too small when compared to Gmail, which could show 16-20 emails. Tim Smith, Visual Design Lead for inbox explains:“If you open Gmail and Inbox side by side, there is a big difference in visual density. This also turned out to be one of the greatest challenges; finding the ideal balance of content and breathing room.”By making adjustments to the grid, row heights, and how type presented, Inbox managed to set a design standard for dense web UIs and display 12–17 emails, each inside a Material Design card. The font size and interface were also designed to change and adjust to a person’s device. For example, the subject line in an email will increase in font size depending on an increase in screen size.Inbox was designed to fit as much information as possible even at small screen sizes, setting a Material Design standard for dense web interfaces.Using colors, imagery, and icons to give context to the userInbox’s visual distinction from Gmail was handled by their use of header images, which relate to the content within bundled emails. If someone using Inbox plans a trip to the New York City, for example, they’ll be shown an image of the Manhattan skyline. Inbox also uses a vast array of icons in a left navigation drawer that are colored according to their function in the app. For example, when a user clicks or taps the green “Done” button, the background color of the header bar also changes to green, keeping the user informed of the change and context.This use of contextual imagery is another defining characteristic of Inbox’s distinct brand experience.Inbox will add imagery to a bundle of emails to give them meaning. For instance, plane ticket and hotel reservation emails for a trip to New York show a picture of the city’s skyline.Designing a header bar for the webAnother challenge for the team was the design of the app bar. The initial proposal was a variable header that didn’t stretch to fill the full browser window, but instead matched the width of the content.“We worked through about a dozen different variations of this concept until ultimately landing on the full width header bar you see today. We also worked through several prototypes to determine the best search field styling.”Tim Smith, Visual Design Lead, InboxSince the cards in Inbox expand and contract, this meant having to adjust the header every time the user interacted with an email. The app bar also contains a search field and a menu that displays other Google apps. This approach lets Inbox remain responsive without complicating the interface.Keep: Adapting navigational patternsKeep is a cross-platform, note-taking application that expands and collapses Material cards on screen to focus a user’s attention while adding notes. A modified bottom navigation bar also lets people create a new note quickly with a single tap.Encouraging actions with empty states and motionEmpty states typically occur when there isn’t any content to show to the user. Keep uses this design pattern by giving people a blank canvas on which to draft their thoughts. The spareness of the UI encourages the user to explore different elements in the app bar search, which expands to reveal icon filters; a sorting menu that allows users to toggle between list view and grid view; and a left navigation drawer to adjust the app’s main settings. The cards expand and contract to give users context.Keep uses empty states to encourage people to create new notes“Motion is something we have put a lot of effort into — from the way notes animate into the stream view, to the way they transition when you open and close them.”Genevieve Cuevas, Software engineer, Google KeepUsing the right Material patterns for your app: bottom navigation vs. FABWhen redesigning the app, Keep’s team of designers and developers pored over the Material Design patterns and ended up applying components like cards which help distinguish notes from one another, a left navigation drawer that makes settings for the app easily available, and contextual menus that change to fit the context of each note — like a note with checkboxes displaying a menu to check all items in a list. Combined, these different design patterns create a clean and functional user experience that adapts depending on the context and needs of the user, a key factor in Keep’s simplicity and easy-to-use interface.During the redesign process, the Keep team experimented with some of Material’s core navigation by testing an expandable FAB in lieu of the existing bottom navigation. For context, the bottom navigation offered a simple one-tap call to action to create new notes. The new FAB required two taps: one to expand options, and a second tap to create notes.“When we launched the FAB, some of our users complained about losing the one-tap create note behavior.”Genevieve Cuevas, Software engineer, Google KeepThis change seemed regressive to people who previously used the app and were accustomed to single-tap navigation. Keep’s journey, testing out and ultimately abandoning core Material components like the FAB, stands as a great example of choosing the Material guidance that works best as opposed to shoehorning behavior that doesn’t fit the product.Guides not rulesBoth Inbox and Keep teams utilized the Material Design guidelines, using them to help design and develop their applications. When they came across a use case that didn’t work for their product, they adapted their designs accordingly. Material Design offers a lot of guidance, built on years of UX experience throughout Google, but it can’t cover everything. Hopefully these examples above show that you can adapt it to suit your needs while still conforming to the overall spirit of the guidelines.</p>
          </div>
        );
      case "2":
        return (
          <div className="ph4 es h-100">
            <div className="w-100 h5 mb3 bg-near-white"></div>
            <h1>Slide 2</h1>
            <p>How Google Designers Adapt MaterialMaterial Design provides a set of tools and guidance to help you make informed decisions about the different UX design directions you could take when creating an app. But what happens when the guidelines don’t fit your product needs? And what happens at Google when a designer is working on a product that doesn’t quite fit the guidelines?The Material guidelines adapt. In this article we’ll look at two Google apps — Keep and Inbox — to understand how they not only bend some of the rules, but how they help shape the Material Design guidelines as a whole.Inbox: Exploring the typographic gridDesigning a new email web application is an extremely ambitious undertaking at Google, especially when it appears alongside an established product like Gmail. The Inbox team set out to create a denser UI as well as a unique user experience and brand identity while playing by the new Material Design rules. While the Inbox design team was putting together their initial designs, Material Design was still being developed. This presented the team with a great opportunity: The potential to establish what the Material Design web standards could be, while solving the problem of designing for dense UIs.Designing dense UIsThe initial design for Inbox wasn’t flexible enough, as the grid only had space for seven emails on a 13-inch screen. This was far too small when compared to Gmail, which could show 16-20 emails. Tim Smith, Visual Design Lead for inbox explains:“If you open Gmail and Inbox side by side, there is a big difference in visual density. This also turned out to be one of the greatest challenges; finding the ideal balance of content and breathing room.”By making adjustments to the grid, row heights, and how type presented, Inbox managed to set a design standard for dense web UIs and display 12–17 emails, each inside a Material Design card. The font size and interface were also designed to change and adjust to a person’s device. For example, the subject line in an email will increase in font size depending on an increase in screen size.Inbox was designed to fit as much information as possible even at small screen sizes, setting a Material Design standard for dense web interfaces.Using colors, imagery, and icons to give context to the userInbox’s visual distinction from Gmail was handled by their use of header images, which relate to the content within bundled emails. If someone using Inbox plans a trip to the New York City, for example, they’ll be shown an image of the Manhattan skyline. Inbox also uses a vast array of icons in a left navigation drawer that are colored according to their function in the app. For example, when a user clicks or taps the green “Done” button, the background color of the header bar also changes to green, keeping the user informed of the change and context.This use of contextual imagery is another defining characteristic of Inbox’s distinct brand experience.Inbox will add imagery to a bundle of emails to give them meaning. For instance, plane ticket and hotel reservation emails for a trip to New York show a picture of the city’s skyline.Designing a header bar for the webAnother challenge for the team was the design of the app bar. The initial proposal was a variable header that didn’t stretch to fill the full browser window, but instead matched the width of the content.“We worked through about a dozen different variations of this concept until ultimately landing on the full width header bar you see today. We also worked through several prototypes to determine the best search field styling.”Tim Smith, Visual Design Lead, InboxSince the cards in Inbox expand and contract, this meant having to adjust the header every time the user interacted with an email. The app bar also contains a search field and a menu that displays other Google apps. This approach lets Inbox remain responsive without complicating the interface.Keep: Adapting navigational patternsKeep is a cross-platform, note-taking application that expands and collapses Material cards on screen to focus a user’s attention while adding notes. A modified bottom navigation bar also lets people create a new note quickly with a single tap.Encouraging actions with empty states and motionEmpty states typically occur when there isn’t any content to show to the user. Keep uses this design pattern by giving people a blank canvas on which to draft their thoughts. The spareness of the UI encourages the user to explore different elements in the app bar search, which expands to reveal icon filters; a sorting menu that allows users to toggle between list view and grid view; and a left navigation drawer to adjust the app’s main settings. The cards expand and contract to give users context.Keep uses empty states to encourage people to create new notes“Motion is something we have put a lot of effort into — from the way notes animate into the stream view, to the way they transition when you open and close them.”Genevieve Cuevas, Software engineer, Google KeepUsing the right Material patterns for your app: bottom navigation vs. FABWhen redesigning the app, Keep’s team of designers and developers pored over the Material Design patterns and ended up applying components like cards which help distinguish notes from one another, a left navigation drawer that makes settings for the app easily available, and contextual menus that change to fit the context of each note — like a note with checkboxes displaying a menu to check all items in a list. Combined, these different design patterns create a clean and functional user experience that adapts depending on the context and needs of the user, a key factor in Keep’s simplicity and easy-to-use interface.During the redesign process, the Keep team experimented with some of Material’s core navigation by testing an expandable FAB in lieu of the existing bottom navigation. For context, the bottom navigation offered a simple one-tap call to action to create new notes. The new FAB required two taps: one to expand options, and a second tap to create notes.“When we launched the FAB, some of our users complained about losing the one-tap create note behavior.”Genevieve Cuevas, Software engineer, Google KeepThis change seemed regressive to people who previously used the app and were accustomed to single-tap navigation. Keep’s journey, testing out and ultimately abandoning core Material components like the FAB, stands as a great example of choosing the Material guidance that works best as opposed to shoehorning behavior that doesn’t fit the product.Guides not rulesBoth Inbox and Keep teams utilized the Material Design guidelines, using them to help design and develop their applications. When they came across a use case that didn’t work for their product, they adapted their designs accordingly. Material Design offers a lot of guidance, built on years of UX experience throughout Google, but it can’t cover everything. Hopefully these examples above show that you can adapt it to suit your needs while still conforming to the overall spirit of the guidelines.</p>
          </div>
        );
      case "3":
        return (
          <div className="ph4 es h-100">
            <div className="w-100 h5 mb3 bg-near-white"></div>
            <h1>Slide 3</h1>
            <p>How Google Designers Adapt MaterialMaterial Design provides a set of tools and guidance to help you make informed decisions about the different UX design directions you could take when creating an app. But what happens when the guidelines don’t fit your product needs? And what happens at Google when a designer is working on a product that doesn’t quite fit the guidelines?The Material guidelines adapt. In this article we’ll look at two Google apps — Keep and Inbox — to understand how they not only bend some of the rules, but how they help shape the Material Design guidelines as a whole.Inbox: Exploring the typographic gridDesigning a new email web application is an extremely ambitious undertaking at Google, especially when it appears alongside an established product like Gmail. The Inbox team set out to create a denser UI as well as a unique user experience and brand identity while playing by the new Material Design rules. While the Inbox design team was putting together their initial designs, Material Design was still being developed. This presented the team with a great opportunity: The potential to establish what the Material Design web standards could be, while solving the problem of designing for dense UIs.Designing dense UIsThe initial design for Inbox wasn’t flexible enough, as the grid only had space for seven emails on a 13-inch screen. This was far too small when compared to Gmail, which could show 16-20 emails. Tim Smith, Visual Design Lead for inbox explains:“If you open Gmail and Inbox side by side, there is a big difference in visual density. This also turned out to be one of the greatest challenges; finding the ideal balance of content and breathing room.”By making adjustments to the grid, row heights, and how type presented, Inbox managed to set a design standard for dense web UIs and display 12–17 emails, each inside a Material Design card. The font size and interface were also designed to change and adjust to a person’s device. For example, the subject line in an email will increase in font size depending on an increase in screen size.Inbox was designed to fit as much information as possible even at small screen sizes, setting a Material Design standard for dense web interfaces.Using colors, imagery, and icons to give context to the userInbox’s visual distinction from Gmail was handled by their use of header images, which relate to the content within bundled emails. If someone using Inbox plans a trip to the New York City, for example, they’ll be shown an image of the Manhattan skyline. Inbox also uses a vast array of icons in a left navigation drawer that are colored according to their function in the app. For example, when a user clicks or taps the green “Done” button, the background color of the header bar also changes to green, keeping the user informed of the change and context.This use of contextual imagery is another defining characteristic of Inbox’s distinct brand experience.Inbox will add imagery to a bundle of emails to give them meaning. For instance, plane ticket and hotel reservation emails for a trip to New York show a picture of the city’s skyline.Designing a header bar for the webAnother challenge for the team was the design of the app bar. The initial proposal was a variable header that didn’t stretch to fill the full browser window, but instead matched the width of the content.“We worked through about a dozen different variations of this concept until ultimately landing on the full width header bar you see today. We also worked through several prototypes to determine the best search field styling.”Tim Smith, Visual Design Lead, InboxSince the cards in Inbox expand and contract, this meant having to adjust the header every time the user interacted with an email. The app bar also contains a search field and a menu that displays other Google apps. This approach lets Inbox remain responsive without complicating the interface.Keep: Adapting navigational patternsKeep is a cross-platform, note-taking application that expands and collapses Material cards on screen to focus a user’s attention while adding notes. A modified bottom navigation bar also lets people create a new note quickly with a single tap.Encouraging actions with empty states and motionEmpty states typically occur when there isn’t any content to show to the user. Keep uses this design pattern by giving people a blank canvas on which to draft their thoughts. The spareness of the UI encourages the user to explore different elements in the app bar search, which expands to reveal icon filters; a sorting menu that allows users to toggle between list view and grid view; and a left navigation drawer to adjust the app’s main settings. The cards expand and contract to give users context.Keep uses empty states to encourage people to create new notes“Motion is something we have put a lot of effort into — from the way notes animate into the stream view, to the way they transition when you open and close them.”Genevieve Cuevas, Software engineer, Google KeepUsing the right Material patterns for your app: bottom navigation vs. FABWhen redesigning the app, Keep’s team of designers and developers pored over the Material Design patterns and ended up applying components like cards which help distinguish notes from one another, a left navigation drawer that makes settings for the app easily available, and contextual menus that change to fit the context of each note — like a note with checkboxes displaying a menu to check all items in a list. Combined, these different design patterns create a clean and functional user experience that adapts depending on the context and needs of the user, a key factor in Keep’s simplicity and easy-to-use interface.During the redesign process, the Keep team experimented with some of Material’s core navigation by testing an expandable FAB in lieu of the existing bottom navigation. For context, the bottom navigation offered a simple one-tap call to action to create new notes. The new FAB required two taps: one to expand options, and a second tap to create notes.“When we launched the FAB, some of our users complained about losing the one-tap create note behavior.”Genevieve Cuevas, Software engineer, Google KeepThis change seemed regressive to people who previously used the app and were accustomed to single-tap navigation. Keep’s journey, testing out and ultimately abandoning core Material components like the FAB, stands as a great example of choosing the Material guidance that works best as opposed to shoehorning behavior that doesn’t fit the product.Guides not rulesBoth Inbox and Keep teams utilized the Material Design guidelines, using them to help design and develop their applications. When they came across a use case that didn’t work for their product, they adapted their designs accordingly. Material Design offers a lot of guidance, built on years of UX experience throughout Google, but it can’t cover everything. Hopefully these examples above show that you can adapt it to suit your needs while still conforming to the overall spirit of the guidelines.</p>
          </div>
        );
      case "4":
        return (
          <div className="ph4 es h-100">
            <div className="w-100 h5 mb3 bg-near-white"></div>
            <h1>Slide 4</h1>
            <p>How Google Designers Adapt MaterialMaterial Design provides a set of tools and guidance to help you make informed decisions about the different UX design directions you could take when creating an app. But what happens when the guidelines don’t fit your product needs? And what happens at Google when a designer is working on a product that doesn’t quite fit the guidelines?The Material guidelines adapt. In this article we’ll look at two Google apps — Keep and Inbox — to understand how they not only bend some of the rules, but how they help shape the Material Design guidelines as a whole.Inbox: Exploring the typographic gridDesigning a new email web application is an extremely ambitious undertaking at Google, especially when it appears alongside an established product like Gmail. The Inbox team set out to create a denser UI as well as a unique user experience and brand identity while playing by the new Material Design rules. While the Inbox design team was putting together their initial designs, Material Design was still being developed. This presented the team with a great opportunity: The potential to establish what the Material Design web standards could be, while solving the problem of designing for dense UIs.Designing dense UIsThe initial design for Inbox wasn’t flexible enough, as the grid only had space for seven emails on a 13-inch screen. This was far too small when compared to Gmail, which could show 16-20 emails. Tim Smith, Visual Design Lead for inbox explains:“If you open Gmail and Inbox side by side, there is a big difference in visual density. This also turned out to be one of the greatest challenges; finding the ideal balance of content and breathing room.”By making adjustments to the grid, row heights, and how type presented, Inbox managed to set a design standard for dense web UIs and display 12–17 emails, each inside a Material Design card. The font size and interface were also designed to change and adjust to a person’s device. For example, the subject line in an email will increase in font size depending on an increase in screen size.Inbox was designed to fit as much information as possible even at small screen sizes, setting a Material Design standard for dense web interfaces.Using colors, imagery, and icons to give context to the userInbox’s visual distinction from Gmail was handled by their use of header images, which relate to the content within bundled emails. If someone using Inbox plans a trip to the New York City, for example, they’ll be shown an image of the Manhattan skyline. Inbox also uses a vast array of icons in a left navigation drawer that are colored according to their function in the app. For example, when a user clicks or taps the green “Done” button, the background color of the header bar also changes to green, keeping the user informed of the change and context.This use of contextual imagery is another defining characteristic of Inbox’s distinct brand experience.Inbox will add imagery to a bundle of emails to give them meaning. For instance, plane ticket and hotel reservation emails for a trip to New York show a picture of the city’s skyline.Designing a header bar for the webAnother challenge for the team was the design of the app bar. The initial proposal was a variable header that didn’t stretch to fill the full browser window, but instead matched the width of the content.“We worked through about a dozen different variations of this concept until ultimately landing on the full width header bar you see today. We also worked through several prototypes to determine the best search field styling.”Tim Smith, Visual Design Lead, InboxSince the cards in Inbox expand and contract, this meant having to adjust the header every time the user interacted with an email. The app bar also contains a search field and a menu that displays other Google apps. This approach lets Inbox remain responsive without complicating the interface.Keep: Adapting navigational patternsKeep is a cross-platform, note-taking application that expands and collapses Material cards on screen to focus a user’s attention while adding notes. A modified bottom navigation bar also lets people create a new note quickly with a single tap.Encouraging actions with empty states and motionEmpty states typically occur when there isn’t any content to show to the user. Keep uses this design pattern by giving people a blank canvas on which to draft their thoughts. The spareness of the UI encourages the user to explore different elements in the app bar search, which expands to reveal icon filters; a sorting menu that allows users to toggle between list view and grid view; and a left navigation drawer to adjust the app’s main settings. The cards expand and contract to give users context.Keep uses empty states to encourage people to create new notes“Motion is something we have put a lot of effort into — from the way notes animate into the stream view, to the way they transition when you open and close them.”Genevieve Cuevas, Software engineer, Google KeepUsing the right Material patterns for your app: bottom navigation vs. FABWhen redesigning the app, Keep’s team of designers and developers pored over the Material Design patterns and ended up applying components like cards which help distinguish notes from one another, a left navigation drawer that makes settings for the app easily available, and contextual menus that change to fit the context of each note — like a note with checkboxes displaying a menu to check all items in a list. Combined, these different design patterns create a clean and functional user experience that adapts depending on the context and needs of the user, a key factor in Keep’s simplicity and easy-to-use interface.During the redesign process, the Keep team experimented with some of Material’s core navigation by testing an expandable FAB in lieu of the existing bottom navigation. For context, the bottom navigation offered a simple one-tap call to action to create new notes. The new FAB required two taps: one to expand options, and a second tap to create notes.“When we launched the FAB, some of our users complained about losing the one-tap create note behavior.”Genevieve Cuevas, Software engineer, Google KeepThis change seemed regressive to people who previously used the app and were accustomed to single-tap navigation. Keep’s journey, testing out and ultimately abandoning core Material components like the FAB, stands as a great example of choosing the Material guidance that works best as opposed to shoehorning behavior that doesn’t fit the product.Guides not rulesBoth Inbox and Keep teams utilized the Material Design guidelines, using them to help design and develop their applications. When they came across a use case that didn’t work for their product, they adapted their designs accordingly. Material Design offers a lot of guidance, built on years of UX experience throughout Google, but it can’t cover everything. Hopefully these examples above show that you can adapt it to suit your needs while still conforming to the overall spirit of the guidelines.</p>
          </div>
        );
      case "5":
        return (
          <div className="ph4 es h-100">
            <div className="w-100 h5 mb3 bg-near-white"></div>
            <h1>Slide 5</h1>
            <p>How Google Designers Adapt MaterialMaterial Design provides a set of tools and guidance to help you make informed decisions about the different UX design directions you could take when creating an app. But what happens when the guidelines don’t fit your product needs? And what happens at Google when a designer is working on a product that doesn’t quite fit the guidelines?The Material guidelines adapt. In this article we’ll look at two Google apps — Keep and Inbox — to understand how they not only bend some of the rules, but how they help shape the Material Design guidelines as a whole.Inbox: Exploring the typographic gridDesigning a new email web application is an extremely ambitious undertaking at Google, especially when it appears alongside an established product like Gmail. The Inbox team set out to create a denser UI as well as a unique user experience and brand identity while playing by the new Material Design rules. While the Inbox design team was putting together their initial designs, Material Design was still being developed. This presented the team with a great opportunity: The potential to establish what the Material Design web standards could be, while solving the problem of designing for dense UIs.Designing dense UIsThe initial design for Inbox wasn’t flexible enough, as the grid only had space for seven emails on a 13-inch screen. This was far too small when compared to Gmail, which could show 16-20 emails. Tim Smith, Visual Design Lead for inbox explains:“If you open Gmail and Inbox side by side, there is a big difference in visual density. This also turned out to be one of the greatest challenges; finding the ideal balance of content and breathing room.”By making adjustments to the grid, row heights, and how type presented, Inbox managed to set a design standard for dense web UIs and display 12–17 emails, each inside a Material Design card. The font size and interface were also designed to change and adjust to a person’s device. For example, the subject line in an email will increase in font size depending on an increase in screen size.Inbox was designed to fit as much information as possible even at small screen sizes, setting a Material Design standard for dense web interfaces.Using colors, imagery, and icons to give context to the userInbox’s visual distinction from Gmail was handled by their use of header images, which relate to the content within bundled emails. If someone using Inbox plans a trip to the New York City, for example, they’ll be shown an image of the Manhattan skyline. Inbox also uses a vast array of icons in a left navigation drawer that are colored according to their function in the app. For example, when a user clicks or taps the green “Done” button, the background color of the header bar also changes to green, keeping the user informed of the change and context.This use of contextual imagery is another defining characteristic of Inbox’s distinct brand experience.Inbox will add imagery to a bundle of emails to give them meaning. For instance, plane ticket and hotel reservation emails for a trip to New York show a picture of the city’s skyline.Designing a header bar for the webAnother challenge for the team was the design of the app bar. The initial proposal was a variable header that didn’t stretch to fill the full browser window, but instead matched the width of the content.“We worked through about a dozen different variations of this concept until ultimately landing on the full width header bar you see today. We also worked through several prototypes to determine the best search field styling.”Tim Smith, Visual Design Lead, InboxSince the cards in Inbox expand and contract, this meant having to adjust the header every time the user interacted with an email. The app bar also contains a search field and a menu that displays other Google apps. This approach lets Inbox remain responsive without complicating the interface.Keep: Adapting navigational patternsKeep is a cross-platform, note-taking application that expands and collapses Material cards on screen to focus a user’s attention while adding notes. A modified bottom navigation bar also lets people create a new note quickly with a single tap.Encouraging actions with empty states and motionEmpty states typically occur when there isn’t any content to show to the user. Keep uses this design pattern by giving people a blank canvas on which to draft their thoughts. The spareness of the UI encourages the user to explore different elements in the app bar search, which expands to reveal icon filters; a sorting menu that allows users to toggle between list view and grid view; and a left navigation drawer to adjust the app’s main settings. The cards expand and contract to give users context.Keep uses empty states to encourage people to create new notes“Motion is something we have put a lot of effort into — from the way notes animate into the stream view, to the way they transition when you open and close them.”Genevieve Cuevas, Software engineer, Google KeepUsing the right Material patterns for your app: bottom navigation vs. FABWhen redesigning the app, Keep’s team of designers and developers pored over the Material Design patterns and ended up applying components like cards which help distinguish notes from one another, a left navigation drawer that makes settings for the app easily available, and contextual menus that change to fit the context of each note — like a note with checkboxes displaying a menu to check all items in a list. Combined, these different design patterns create a clean and functional user experience that adapts depending on the context and needs of the user, a key factor in Keep’s simplicity and easy-to-use interface.During the redesign process, the Keep team experimented with some of Material’s core navigation by testing an expandable FAB in lieu of the existing bottom navigation. For context, the bottom navigation offered a simple one-tap call to action to create new notes. The new FAB required two taps: one to expand options, and a second tap to create notes.“When we launched the FAB, some of our users complained about losing the one-tap create note behavior.”Genevieve Cuevas, Software engineer, Google KeepThis change seemed regressive to people who previously used the app and were accustomed to single-tap navigation. Keep’s journey, testing out and ultimately abandoning core Material components like the FAB, stands as a great example of choosing the Material guidance that works best as opposed to shoehorning behavior that doesn’t fit the product.Guides not rulesBoth Inbox and Keep teams utilized the Material Design guidelines, using them to help design and develop their applications. When they came across a use case that didn’t work for their product, they adapted their designs accordingly. Material Design offers a lot of guidance, built on years of UX experience throughout Google, but it can’t cover everything. Hopefully these examples above show that you can adapt it to suit your needs while still conforming to the overall spirit of the guidelines.</p>
          </div>
        );
      default:
        break;
    } 
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        {/*--- Header ---*/}
        <header className="min-vh-100 pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <figure className="w-100 h5 bg-near-white mh0 mb4">
              
            </figure>
            <h1 className="tc">自我認識 <FontAwesome name='rocket'/></h1>
            <h3 className="tc">This is a description</h3>
          </div>
        </header>
        {/*--- Section 1 ---*/}
        <section className="bg-near-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <div className="mw9 center ph2">
              <div className="cf mb5">
                <div className="fl w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l pv4 h5 df">A</div>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf mb5">
                <div className="fr w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l ml4-l pv4 h5 df">B</div>
                </div>
                <div className="fl w-100 w-50-l w-100 tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf">
                <div className="fl w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l pv4 h5 df">C</div>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section className="bg-white pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns tc mb5">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="swiper-container mt5 mh2">
              <div className="swiper-wrapper h5">
                <div className="swiper-slide bg-near-white df cp" data-id="1" onClick={this.onOpenModal}>
                  Slide 1
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="2" onClick={this.onOpenModal}>
                  Slide 2
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="3" onClick={this.onOpenModal}>
                  Slide 3
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="4" onClick={this.onOpenModal}>
                  Slide 4
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="5" onClick={this.onOpenModal}>
                  Slide 5
                </div>
              </div>
            </div>
            <div className="swiper-pagination mt3"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <Modal open={open} onClose={this.onCloseModal} little>
            {this.modalContent(modalId)}
          </Modal>
        </section>
        {/*--- Section 3 ---*/}
        <section className="bg-near-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc mb5">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="1" onClick={this.onOpenModal}>
                    <h3 className="pn">1</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="2" onClick={this.onOpenModal}>
                    <h3 className="pn">2</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="3" onClick={this.onOpenModal}>
                    <h3 className="pn">3</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="4" onClick={this.onOpenModal}>
                    <h3 className="pn">4</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="5" onClick={this.onOpenModal}>
                    <h3 className="pn">5</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
