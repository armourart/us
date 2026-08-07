/**
 * Ashwin ❤️ Nayana — Our Story
 * Data Store: Photos, Timeline Milestones & Reasons I Love You
 */

const galleryPhotos = [
    { id: 1, src: "pictures/1.jpg", title: "The Day It All Began", date: "20 Jan 2025", caption: "The moment our eyes met and two hearts became one forever." },
    { id: 2, src: "pictures/2.jpg", title: "Mirror Mirror on the Wall", date: "24 Jan 2025", caption: "Soft hugs and mirror selfies in our own little romantic world." },
    { id: 3, src: "pictures/3.jpg", title: "Dressed in Tradition", date: "28 Jan 2025", caption: "Looking at you in traditional wear stole my heart all over again." },
    { id: 4, src: "pictures/4.jpg", title: "Bus Rides & Whispers", date: "02 Feb 2025", caption: "Leaning close on quiet bus journeys, enjoying every single second." },
    { id: 5, src: "pictures/5.jpg", title: "Radiant Smiles", date: "08 Feb 2025", caption: "Your smile brightens up even the dimmest of days." },
    { id: 6, src: "pictures/6.jpg", title: "Unforgettable Moments", date: "14 Feb 2025", caption: "Our very first Valentine's celebration together." },
    { id: 7, src: "pictures/7.jpg", title: "Warm Embraces", date: "20 Feb 2025", caption: "In your arms is the safest and happiest place in the world." },
    { id: 8, src: "pictures/8.jpg", title: "Golden Hour Glow", date: "25 Feb 2025", caption: "Chasing sunsets and holding hands under the golden sky." },
    { id: 9, src: "pictures/9.jpg", title: "Sweet Laughter", date: "01 Mar 2025", caption: "Inside jokes and endless giggles that make my heart flutter." },
    { id: 10, src: "pictures/10.jpg", title: "Pure Magic", date: "07 Mar 2025", caption: "Every moment with you feels like a dream come true." },
    { id: 11, src: "pictures/11.jpg", title: "Forever & Always", date: "12 Mar 2025", caption: "Promising to love each other through all season of life." },
    { id: 12, src: "pictures/12.jpg", title: "Side by Side", date: "18 Mar 2025", caption: "Walking together through life's sweetest pathways." },
    { id: 13, src: "pictures/13.jpg", title: "Gentle Touches", date: "23 Mar 2025", caption: "Soft caresses and quiet moments of deep understanding." },
    { id: 14, src: "pictures/14.jpg", title: "Charming Date Night", date: "29 Mar 2025", caption: "A romantic evening filled with love, laughter, and great food." },
    { id: 15, src: "pictures/15.jpg", title: "Soul Connections", date: "04 Apr 2025", caption: "Two souls inextricably woven together by fate." },
    { id: 16, src: "pictures/16.jpg", title: "Cozy Afternoons", date: "10 Apr 2025", caption: "Enjoying peaceful silence knowing we have each other." },
    { id: 17, src: "pictures/17.jpg", title: "Sparkling Eyes", date: "15 Apr 2025", caption: "I see my whole future reflected right inside your eyes." },
    { id: 18, src: "pictures/18.jpg", title: "Sweetest Memories", date: "21 Apr 2025", caption: "Creating memories that will warm our hearts for a lifetime." },
    { id: 19, src: "pictures/19.jpg", title: "Heartfelt Smiles", date: "27 Apr 2025", caption: "The genuine joy that blooms whenever we are near." },
    { id: 20, src: "pictures/20.jpg", title: "My Favorite Person", date: "02 May 2025", caption: "You are my best friend, my soulmate, and my whole world." },
    { id: 21, src: "pictures/21.jpg", title: "Together in Style", date: "08 May 2025", caption: "Making every outfit look extra special when we match." },
    { id: 22, src: "pictures/22.jpg", title: "Precious Snapshots", date: "14 May 2025", caption: "Freezing time with little photo memories we cherish forever." },
    { id: 23, src: "pictures/23.jpg", title: "Endless Affection", date: "20 May 2025", caption: "My love for you grows stronger with every passing tick of the clock." },
    { id: 24, src: "pictures/24.jpg", title: "Warm Sunshine", date: "26 May 2025", caption: "You bring warmth and light into every single morning." },
    { id: 25, src: "pictures/25.jpg", title: "Cherished Moments", date: "01 Jun 2025", caption: "Holding onto every second spent wrapped in your embrace." },
    { id: 26, src: "pictures/26.jpg", title: "Rainy Day Romantics", date: "07 Jun 2025", caption: "Listening to the rain fall while feeling warm in your arms." },
    { id: 27, src: "pictures/27.jpg", title: "Playful Vibes", date: "13 Jun 2025", caption: "Silly faces and endless joy when we're together." },
    { id: 28, src: "pictures/28.jpg", title: "True Happiness", date: "19 Jun 2025", caption: "Finding contentment in the simplest things with you." },
    { id: 29, src: "pictures/29.jpg", title: "Heart to Heart", date: "25 Jun 2025", caption: "Late night conversations that reveal the depth of our love." },
    { id: 30, src: "pictures/30.jpg", title: "Starry Nights", date: "01 Jul 2025", caption: "Under the stars, dreaming about our beautiful future together." },
    { id: 31, src: "pictures/31.jpg", title: "Sweet Surprises", date: "07 Jul 2025", caption: "Little tokens of affection that light up our days." },
    { id: 32, src: "pictures/32.jpg", title: "Adventures Ahead", date: "13 Jul 2025", caption: "Exploring new places hand-in-hand with my favorite human." },
    { id: 33, src: "pictures/33.jpg", title: "Unconditional Love", date: "19 Jul 2025", caption: "Loving you for exactly who you are, every single day." },
    { id: 34, src: "pictures/34.jpg", title: "Comfort & Peace", date: "25 Jul 2025", caption: "Finding home in your heart no matter where we go." },
    { id: 35, src: "pictures/35.jpg", title: "Radiant Joy", date: "31 Jul 2025", caption: "A happiness so pure it shines from the inside out." },
    { id: 36, src: "pictures/36.jpg", title: "Whispers of Love", date: "06 Aug 2025", caption: "Quiet words of encouragement that uplift my spirit." },
    { id: 37, src: "pictures/37.jpg", title: "Beautiful Together", date: "12 Aug 2025", caption: "Every photo tells the story of an unbreakable bond." },
    { id: 38, src: "pictures/38.jpg", title: "Endless Romance", date: "18 Aug 2025", caption: "Falling in love with you more and more each day." },
    { id: 39, src: "pictures/39.jpg", title: "Golden Memories", date: "24 Aug 2025", caption: "Treasured chapters in our ongoing love story." },
    { id: 40, src: "pictures/40.jpg", title: "Forever Mine", date: "30 Aug 2025", caption: "Grateful every day for the blessing of having you." },
    { id: 41, src: "pictures/41.jpg", title: "Sweet Harmony", date: "05 Sep 2025", caption: "Our hearts beat in perfect synchrony with one another." },
    { id: 42, src: "pictures/42.jpg", title: "Joyful Hearts", date: "11 Sep 2025", caption: "Bringing out the absolute best version of each other." },
    { id: 43, src: "pictures/43.jpg", title: "Love's Light", date: "17 Sep 2025", caption: "Illuminating my life with your gentle grace." },
    { id: 44, src: "pictures/44.jpg", title: "Best Friends", date: "23 Sep 2025", caption: "Laughter, loyalty, and love tied together in one." },
    { id: 45, src: "pictures/45.jpg", title: "Forever Hold", date: "29 Sep 2025", caption: "Never letting go of the hand that holds my heart." },
    { id: 46, src: "pictures/46.jpg", title: "Pure Romance", date: "05 Oct 2025", caption: "Simple moments turned into extraordinary memories." },
    { id: 47, src: "pictures/47.jpg", title: "Our Eternal Story", date: "20 Jan 2026", caption: "Celebrating our journey and looking forward to forever." }
];

const timelineMilestones = [
    {
        date: "20th January 2025",
        title: "The Spark of Love",
        caption: "The day Ashwin and Nayana officially fell in love. A quiet moment that transformed our lives forever and marked the beginning of our endless journey.",
        image: "pictures/1.jpg",
        tag: "Beginning"
    },
    {
        date: "14th February 2025",
        title: "First Valentine's Day",
        caption: "Our very first Valentine's together filled with sweet laughter, heartfelt promises, and unforgettable glances that set our hearts racing.",
        image: "pictures/6.jpg",
        tag: "Celebration"
    },
    {
        date: "20th March 2025",
        title: "Two Months of Pure Bliss",
        caption: "Sixty days of endless phone calls, cozy bus rides, silly jokes, and realizing every day how deeply blessed we are to have found each other.",
        image: "pictures/3.jpg",
        tag: "Milestone"
    },
    {
        date: "20th July 2025",
        title: "Half a Year Together",
        caption: "Six wonderful months of building trust, sharing dreams, supporting one another, and knowing without a doubt that we are soulmates.",
        image: "pictures/5.jpg",
        tag: "6 Months"
    },
    {
        date: "20th January 2026",
        title: "1 Year Anniversary & Beyond",
        caption: "365 days of unconditional love, growth, and joy. Here's to a lifetime of hand-in-hand adventures, laughter, and eternal togetherness!",
        image: "pictures/47.jpg",
        tag: "1 Year"
    }
];

const loveReasons = [
    {
        number: "01",
        title: "Your Radiant Smile",
        text: "The way your smile lights up the entire room and instantly wipes away all my worries.",
        icon: "fa-heart"
    },
    {
        number: "02",
        title: "Your Gentle Soul",
        text: "Your kindness, warmth, and compassion towards everyone around you inspires me every single day.",
        icon: "fa-sparkles"
    },
    {
        number: "03",
        title: "Safe in Your Arms",
        text: "How being in your embrace feels like the safest, warmest, and most peaceful place on earth.",
        icon: "fa-hands-holding-heart"
    },
    {
        number: "04",
        title: "Unconditional Support",
        text: "You believe in me even when I doubt myself, standing by my side as my biggest strength.",
        icon: "fa-shield-heart"
    },
    {
        number: "05",
        title: "Endless Laughter",
        text: "Our silly inside jokes, shared laughter, and how easily you make me laugh from the heart.",
        icon: "fa-face-smile-beam"
    },
    {
        number: "06",
        title: "Our Soul Connection",
        text: "The effortless way we understand each other without saying a single word.",
        icon: "fa-infinity"
    }
];

const romanticQuotes = [
    "\"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.\"",
    "\"I fell in love the way you fall asleep: slowly, and then all at once.\"",
    "\"Every love story is beautiful, but ours is my absolute favorite.\"",
    "\"You are my today and all of my tomorrows.\"",
    "\"With you, every day feels like Valentine's Day.\""
];
