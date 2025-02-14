import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center w-[93%] absolute top-0"
      onClick={() => props.setWaitingForDriver(false)}
    >
      <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
    </h5>
    <div className='flex items-center justify-between'>
    <img
        className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3T6g2Q-aLZNX8NdkagbSOvRVPlCuru6YKaLWOF5UGJdNj2jUIOTBfEQ&s"
          alt=""
        />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Nitish</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>Up64 AB 1243</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
    </div>
    <div className="flex gap-2 justify-between flex-col items-center">
      <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
              <div>
                  <h3 className="text-lg font-medium">Rs 193.20</h3>
                  <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
      </div>
    </div>
  </div>
  )
}

export default WaitingForDriver
