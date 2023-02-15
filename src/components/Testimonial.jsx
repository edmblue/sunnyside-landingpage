const Testimonial = ({ item }) => {
  const { image, content, name, role } = item;
  return (
    <div>
      <div className="space-y-6 md:leading-7 lg:space-y-14">
        <img
          src={image}
          alt="img-profile"
          className="w-14 rounded-full mx-auto"
        />
        <p className="font-barlow text-veryDarkGrayishBlue">{content}</p>
        <div>
          <p className="font-fraunces font-[900] text-veryDarkDesaturatedBlue">
            {name}
          </p>
          <p className="text-sm font-barlow text-grayishBlue mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
