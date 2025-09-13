import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className=" text-black text-2xl font-semibold mt-8 dark:text-white">
        Pacakge Structure
      </h3>
      <div className="rounded-md p-6 pt-3 border border-border dark:border-darkborder mt-6">
        <div className="flex items-center gap-4">
          <h5 className="text-base font-medium mt-3 mb-1">
            SaasCandy Tailwind Nextjs Templates
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                |—
              </p>
              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                />
                packages
              </span>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between gap-2 mt-2">
                {Counts.slice(0, 32).map((item) => {
                  return (
                    <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                      |
                    </p>
                  );
                })}
              </div>
              <ul className="ps-5 md:ps-5 list-unstyled">
                <li className="py-0">
                  <ul className="ps-2 ps-md-3 list-unstyled">
                    <li className="py-2">
                      <ul className="ps-0 md:ps-5 list-unstyled">
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary text-base inline-block me-2"
                              />
                              markdown
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary text-base inline-block me-2"
                              />
                              public
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary text-base inline-block me-2"
                              />
                              src
                            </span>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col justify-between gap-2 mt-2">
                              {Counts.slice(0, 26).map((item) => {
                                return (
                                  <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                    |
                                  </p>
                                );
                              })}
                            </div>
                            <ul className="ps-5 md:ps-12 list-unstyled">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                    |—
                                  </p>
                                  <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary text-base inline-block me-2"
                                    />
                                    app
                                  </span>
                                </div>
                                <div className="flex">
                                  <div className="flex flex-col justify-between gap-2 mt-2">
                                    {Counts.slice(0, 20).map((item) => {
                                      return (
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |
                                        </p>
                                      );
                                    })}
                                  </div>
                                  <ul className="ps-5 md:ps-12 list-unstyled red">
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary text-base inline-block me-2"
                                          />
                                          (site)
                                        </span>{" "}
                                        <span className="fs-9 text-midnight_text dark:text-white dark:text-opacity-50 ms-4">
                                          (Contains all the pages)
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="flex flex-col justify-between gap-2 mt-2">
                                          {Counts.slice(0, 10).map(
                                            (item, index) => {
                                              return (
                                                <p
                                                  key={index}
                                                  className="text-xl text-black dark:text-white dark:text-opacity-50"
                                                >
                                                  |
                                                </p>
                                              );
                                            }
                                          )}
                                        </div>

                                        <ul className="ps-5 md:ps-12 list-unstyled">
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                (auth)
                                              </span>
                                            </div>
                                            <div className="flex">
                                              <div className="flex flex-col justify-between gap-1 mt-2">
                                                {Counts.slice(0, 2).map(
                                                  (item) => {
                                                    return (
                                                      <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                        |
                                                      </p>
                                                    );
                                                  }
                                                )}
                                              </div>
                                              <ul className="ps-5 md:ps-12 list-unstyled">
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                      |
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                        |—
                                                      </p>
                                                      <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                        <Icon
                                                          icon="tabler:folder"
                                                          className="text-primary text-base inline-block me-2"
                                                        />
                                                        signin
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                      |
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                        |—
                                                      </p>
                                                      <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                        <Icon
                                                          icon="tabler:folder"
                                                          className="text-primary text-base inline-block me-2"
                                                        />
                                                        signup
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                blog
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                contact
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                documentation
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                portfolio
                                              </span>
                                            </div>
                                          </li>

                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                pricing
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |—
                                              </p>
                                              <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                services
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center flex-wrap gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary text-base inline-block me-2"
                                          />
                                          components
                                        </span>{" "}
                                        <span className="fs-9 text-midnight_text ms-4 dark:text-white dark:text-opacity-50">
                                          (All the Components of this template.)
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary text-base inline-block me-2"
                                          />
                                          types
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary text-base inline-block me-2"
                                          />
                                          api
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="flex flex-col justify-between gap-2 mt-2">
                                          {Counts.slice(0, 2).map((item) => {
                                            return (
                                              <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                |
                                              </p>
                                            );
                                          })}
                                        </div>
                                        <ul className="ps-5 md:ps-12 list-unstyled">
                                          <li className="py-2">
                                            <div className="flex items-center gap-8">
                                              <div className="flex items-center gap-3">
                                                <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                  |—
                                                </p>
                                                <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                  <Icon
                                                    icon="tabler:folder"
                                                    className="text-primary text-base inline-block me-2"
                                                  />
                                                  auth
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-8">
                                              <div className="flex items-center gap-3">
                                                <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                                  |—
                                                </p>
                                                <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                                  <Icon
                                                    icon="tabler:folder"
                                                    className="text-primary text-base inline-block me-2"
                                                  />
                                                  contex
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          global.css
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          layout.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          not-found.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |—
                                        </p>
                                        <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                          page.tsx
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                    |—
                                  </p>
                                  <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary text-base inline-block me-2"
                                    />
                                    Context
                                  </span>
                                </div>
                                <div className="flex">
                                  <div className="flex flex-col justify-between gap-2 mt-2">
                                    {Counts.slice(0, 1).map((item) => {
                                      return (
                                        <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                          |
                                        </p>
                                      );
                                    })}
                                  </div>
                                  <ul className="ps-5 md:ps-12 list-unstyled">
                                    <li className="py-2">
                                      <div className="flex items-center gap-8">
                                        <div className="flex items-center gap-3">
                                          <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                            |—
                                          </p>
                                          <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50 flex items-center flex-wrap">
                                            <Icon
                                              icon="tabler:folder"
                                              className="text-primary text-base inline-block me-2"
                                            />
                                            <p className="max-w-12 lg:max-w-full truncate">
                                              authDialogContext.tsx
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                                    |—
                                  </p>
                                  <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary text-base inline-block me-2"
                                    />
                                    utils
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              next.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              postcss.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              package.json
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black dark:text-white dark:text-opacity-50">
                              |—
                            </p>
                            <span className="font-medium text-midnight_text dark:text-white dark:text-opacity-50">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              tsconfig.json
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
