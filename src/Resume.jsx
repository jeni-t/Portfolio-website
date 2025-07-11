import Jenifer_Resume_3d from '../public/Jenifer_Resume_3d.pdf';

const Resume = () => {
  return (
    <div className="p-8 bg-white w-full min-h-screen">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>

      {/* PDF Viewer */}
      <div className="w-full h-[90vh] mb-6 border shadow">
        <iframe
          src={Jenifer_Resume_3d}
          title="Resume"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Download Button */}
    </div>
  );
};

export default Resume;
