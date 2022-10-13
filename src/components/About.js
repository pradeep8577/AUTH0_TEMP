import React from "react";

const About = () => {
  return (
    <>
      <section className="pt-100 pb-100 bg-light application_21">
        <div className="container px-xl-0">
          <div className="mb-md-5 row justify-content-between align-items-center align-items-xl-start">
            <div className="col-md-7 col-xl-6">
              <div className="pb-15 color-heading f-22 medium op-7">
                <div>Yoga Teacher Training</div>
              </div>
              <h2 className="text-adaptive">
                Our Experienced Faculty is Here to Guide You
              </h2>
            </div>
            <div className="col-md-5 col-xl-6">
              <img
                src="https://preview.bootstrap.build/onepage/i/application_21_img_1.png"
                srcset="i/application_21_img_1@2x.png 2x"
                alt=""
                className="img-fluid mt-30 mt-md-0"
              />
            </div>
          </div>
          <div className="mt-20 mt-md-0 row">
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                01
              </div>
              <div className="pb-15 color-main f-32 bold">Decrease Stress</div>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {" "}
                <div>
                  Yoga is known for its ability to ease stress and promote
                  relaxation.
                </div>
              </div>
            </div>
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                02
              </div>
              <div className="pb-15 color-main f-32 bold">Relieves Anxiety</div>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {" "}
                <div>
                  Many people begin practicing yoga as a way to cope with
                  feelings of anxiety.
                </div>
              </div>
            </div>
            <div className="mt-30 col-md-4 no-gutters">
              <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
                03
              </div>
              <div className="pb-15 color-main f-32 bold">Fight Depression</div>
              <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
                {" "}
                <div>
                  After two weeks, participants had fewer symptoms of depression
                  and lower levels of cortisol.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
