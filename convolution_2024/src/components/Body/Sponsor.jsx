import React from "react";
import "./Sponsor.css";
import { Link } from "react-router-dom";
import sponsorpic1 from "../assets/sponsor/1.webp";
import sponsorpic2 from "../assets/sponsor/2.webp";
import sponsorpic3 from "../assets/sponsor/3.webp";
import sponsorpic4 from "../assets/sponsor/4.webp";
import sponsorpic5 from "../assets/sponsor/5.webp";
import sponsorpic6 from "../assets/sponsor/6.webp";
import sponsorpic7 from "../assets/sponsor/7.webp";
import sponsorpic8 from "../assets/sponsor/8.webp";
import sponsorpic9 from "../assets/sponsor/9.webp";
import sponsorpic10 from "../assets/sponsor/10.webp";
import sponsorpic11 from "../assets/sponsor/11.webp";
import sponsorpic12 from "../assets/sponsor/12.webp";
import sponsorpic13 from "../assets/sponsor/13.webp";
import sponsorpic14 from "../assets/sponsor/14.webp";
import sponsorpic15 from "../assets/sponsor/15.webp";
import sponsorpic16 from "../assets/sponsor/16.webp";
import sponsorpic17 from "../assets/sponsor/17.webp";
import sponsorpic18 from "../assets/sponsor/18.webp";
import sponsorpic19 from "../assets/sponsor/19.webp";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: sponsorpic1,
    link: "https://www.techriskpartners.com/",
  },
  // {
  //   index: 1,
  //   headline: "In The Wilderness",
  //   button: "Book travel",
  //   src: sponsorpic4,
  // },
  {
    index: 1,
    headline: "For Your Current Mood",
    button: "Listen",
    src: sponsorpic4,
  },
  {
    // index: 3,
    index: 2,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic6,
  },
  {
    // index: 4,
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic13,
  },
  {
    // index: 5,
    index: 4,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic5,
  },
  // {
  //   // index: 6,
  //   index: 4,
  //   headline: "Focus On The Writing",
  //   button: "Get Focused",
  //   src: sponsorpic10,
  // },
  {
    // index: 7,
    index: 5,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic8,
  },
  {
    // index: 8,
    index: 6,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic7,
  },

  // {
  //   index: 9,
  //   headline: "Focus On The Writing",
  //   button: "Get Focused",
  //   src: sponsorpic2,
  // },

  // {
  //   // index: 10,
  //   index: 6,
  //   headline: "Focus On The Writing",
  //   button: "Get Focused",
  //   src: sponsorpic11,
  // },

  {
    // index: 11,
    index: 7,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic12,
  },

  // {
  //   index: 12,
  //   headline: "Focus On The Writing",
  //   button: "Get Focused",
  //   src: sponsorpic14,
  // },
  {
    index: 8,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic3,
  },
  {
    // index: 14,
    index :9,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic19,
  },
  {
    // index: 15,
    index: 10, 
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic15,
  },
  {
    // index: 16,
    index: 11,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: sponsorpic18,
  },
  // {
  //   // index: 17,
  //   index: 11,
  //   headline: "Focus On The Writing",
  //   button: "Get Focused",
  //   src: sponsorpic18,
  // },
];

// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        {/* <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
          <button className="slide__action btn">{button}</button>
        </article> */}
      </li>
    );
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }
  componentDidMount() {
    this.autoAdvanceInterval = setInterval(this.handleNextClick, 2800);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} class="visuallyhidden">
            {heading}
          </h3>

          {slides.map((slide) => {
            return (
              <a
                key={slide.index}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              </a>
            );
          })}
        </ul>

        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
      </div>
    );
  }
}

function Sponsor() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 pb-3 pt-10">
        <h1 className="text-center teams_h1">SPONSORS</h1>
        <span className="underline_teams"></span>
        <div className="sponsor_body">
          <Slider heading="Example Slider" slides={slideData} />
        </div>
      </div>
    </>
  );
}

export default Sponsor;
