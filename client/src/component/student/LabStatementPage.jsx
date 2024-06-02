import React, { useState } from 'react';

const LabStatementPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupText, setPopupText] = useState('');

    // Function to toggle the popup and set the text
    const openPopup = (text) => {
        setPopupText(text);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupText('');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            {/* Main Page Content */}
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Lab Statement Page</h1>
                <p className="text-gray-700 mb-8">
                    Click any button below to enter your lab details.
                </p>
                <div className="space-x-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={() => openPopup('Lab Details for Experiment 1')}
                    >
                        Experiment 1
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        onClick={() => openPopup('Lab Details for Experiment 2')}
                    >
                        Experiment 2
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                        onClick={() => openPopup('Lab Details for Experiment 3')}
                    >
                        Experiment 3
                    </button>
                </div>
            </div>

            {/* Popup Box */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">{popupText}</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="labName">
                                    Lab Name
                                </label>
                                <input
                                    type="text"
                                    id="labName"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="labDate">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="labDate"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LabStatementPage;