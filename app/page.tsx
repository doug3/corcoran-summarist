"use client";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Image from "next/image";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import landing from "../assets/landing.png";
import logo from "../assets/logo.png";
import { decrement, increment } from "./store/slice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import Starfill from "./components/Starfill";

interface HomeProps {
  handleShowModal: () => void;
}

export default function Home({ handleShowModal }: HomeProps) {
 const dispatch = useDispatch();


  useEffect(() => {
    const highlights: NodeListOf<Element> = document.querySelectorAll("#highlight");
    let currentIndex = 1;
    let secondIndex = 0;

    const interval = setInterval(() => {
      secondIndex = currentIndex + (highlights.length / 2);
      console.log(currentIndex, secondIndex);
      highlights[(currentIndex - 1 + highlights.length) % (highlights.length / 2 )].classList.remove("text-emerald-400");
      highlights[(secondIndex - 1 + highlights.length) % (highlights.length / 2 ) + (highlights.length / 2)].classList.remove("text-emerald-400");
      highlights[currentIndex].classList.add("text-emerald-400");
      highlights[secondIndex].classList.add("text-emerald-400");
      currentIndex = (currentIndex + 1) % (highlights.length / 2);
      
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <Image className="nav__img" src={logo} alt="logo"/>
          </figure>
          <ul className="nav__list--wrapper">
            <li className="nav__list nav__list--login" onClick={handleShowModal}>
              Login
            </li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don&apos;t like to read.
                </div>
                <button className="btn home__cta--btn" onClick={handleShowModal}>
                  Login
                </button>
              </div>
              <figure className="landing__image--mask">
                <Image src={landing} alt="landing" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Understand books in few minutes
            </div>
            <div className="features__wrapper">
              <div className="features">
                <div className="features__icon">
                  <AiFillFileText />
                </div>
                <div className="features__title">Read or listen</div>
                <div className="features__sub--title">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillBulb />
                </div>
                <div className="features__title">Find your next read</div>
                <div className="features__sub--title">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillAudio />
                </div>
                <div className="features__title">Briefcasts</div>
                <div className="features__sub--title">
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--header">
                <div className="statistics__heading">
                  <span id='highlight' className='text-emerald-400'>Enhance your knowledge</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Achieve greater success</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Improve your health</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Develop better parenting skills</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Increase happiness</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Be the best version of yourself!</span>
                </div>
              </div>
              <div className="statistics__content--details">
                <div className="statistics__data">
                  <div className="statistics__data--number">93%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">96%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">90%</div>
                  <div className="statistics__data--title">
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__data">
                  <div className="statistics__data--number">91%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>report feeling more productive</b> "
                    " after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">94%</div>
                  <div className="statistics__data--title">
                    of Summarist members have <b>noticed an improvement</b> in
                    their overall comprehension and retention of information.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">88%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div className="statistics__content--header statistics__content--header-second">
                <div className="statistics__heading">
                  <span id='highlight' className="text-emerald-400">Expand your learning</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Accomplish your goals</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Strengthen your vitality</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Become a better caregiver</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Improve your mood</span>
                </div>
                <div className="statistics__heading">
                  <span id='highlight'>Maximize your abilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews">
        <div className="row">
          <div className="container">
            <div className="section__title">What our members say</div>
            <div className="reviews__wrapper">
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Hanna M.</div>
                  <div className="review__stars">
                    <Starfill wholeStars={5} halfStars={0} />
                  </div>
                </div>
                <div className="review__body">
                  This app has been a <b> game-changer</b> for me! It's saved me
                  so much time and effort in reading and comprehending books.
                  Highly recommend it to all book lovers.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">David B.</div>
                  <div className="review__stars">
                    <Starfill wholeStars={5} halfStars={0} />
                  </div>
                </div>
                <div className="review__body">
                  I love this app! It provides
                  <b> concise and accurate summaries</b> of books in a way that
                  is easy to understand. It's also very user-friendly and
                  intuitive.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Nathan S.</div>
                  <div className="review__stars">
                    <Starfill wholeStars={5} halfStars={0} />
                  </div>
                </div>
                <div className="review__body">
                  This app is a great way to get the main takeaways from a book
                  without having to read the entire thing.
                  <b> The summaries are well-written and informative.</b>
                  Definitely worth downloading.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Ryan R.</div>
                  <div className="review__stars">
                    <Starfill wholeStars={5} halfStars={0} />
                  </div>
                </div>
                <div className="review__body">
                  If you're a busy person who
                  <b> loves reading but doesn't have the time</b> to read every
                  book in full, this app is for you! The summaries are thorough
                  and provide a great overview of the book's content.
                </div>
              </div>
            </div>
            <div className="reviews__btn--wrapper">
              <button className="btn home__cta--btn">Login</button>
            </div>
          </div>
        </div>
      </section>
      <section id="numbers">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Start growing with Summarist now
            </div>
            <div className="numbers__wrapper">
              <div className="numbers">
                <div className="numbers__icon">
                  <BiCrown />
                </div>
                <div className="numbers__title">3 Million</div>
                <div className="numbers__sub--title">
                  Downloads on all platforms
                </div>
              </div>
              <div className="numbers">
                <div className="numbers__icon numbers__star--icon">
                  <Starfill wholeStars={4} halfStars={1} />
                </div>
                <div className="numbers__title">4.5 Stars</div>
                <div className="numbers__sub--title">
                  Average ratings on iOS and Google Play
                </div>
              </div>
              <div className="numbers">
                <div className="numbers__icon">
                  <RiLeafLine />
                </div>
                <div className="numbers__title">97%</div>
                <div className="numbers__sub--title">
                  Of Summarist members create a better reading habit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
