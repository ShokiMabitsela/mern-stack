import React from 'react';
 
interface FormContainerProps {
  children: React.ReactNode; // Expect children prop to be of any valid React node type (elements, string, etc.)
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto mt-20"> {/* Centered container with margin-top */}
      <div className="flex justify-center"> {/* Flexbox centering */}
        <div className="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 bg-white p-6 rounded-lg shadow-lg"> {/* Responsive form with styling */}
          {children} {/* Rendering children components, such as form fields */}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
