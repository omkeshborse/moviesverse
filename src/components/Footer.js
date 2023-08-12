import React from 'react'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer>
      <footer className="bg-white  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Moviesverse
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
                className="mr-4 hover:underline md:mr-6 "
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/omkesh-borse-621218244/"
                className="mr-4 hover:underline md:mr-6"
              >
                LikedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/omkeshborse"
                className="mr-4 hover:underline md:mr-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/"
                className="hover:underline"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
}
