import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAzAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EAD0QAAEDAgQDBQUFBQkAAAAAAAEAAgMEEQUSITEGQVETYXGBoSJSkbHRFCMyQsEHM1Ni8BUWJFSCkqLh8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMFBP/EACIRAQEAAgICAQUBAAAAAAAAAAABAhEDMRIhMgQTIkFRQv/aAAwDAQACEQMRAD8AoATBABMAuQ6YgJgNEAE4CAgCYBABNZMqKI2UsmsgkAUsiEQEwFlFi4pXwYZT/aKhxtsGgak9y5ZvGNSGSNkoWF9yWfe2sOVwqxwyy6Tc5O3ZqBcLXcS4lGMxexhJ9mONgufMrVQ43jc0z5DXStaBcNFjf0Wk4MkXmxenohchgHFz5niDEYrXOVszBz6Efqux06rPLG43VaTKWegsgUxCUqTBGwURASCAJgEQEwCYQBMAgAmCAYBOlCZMmjARCKIChYgJgFAmCAiICICYJpCyZREICWRUCx8RqPslDU1IFzDC6QDrYEpz2HnHEdfLVYv2rnBzGTdmxvcDa1uvNbjB+AquqeayokbDHJqwPF3gdT0Wd+z7C46uU1tYGzyAl13i4DuZXpTGkNs1ui9Vy8fxjGccv5ZOIZwDh7WfeTyyOJuXO3Kx63gmjcB2T5Yy3bK6y7qTMCL3teywqiN2a++nNZ3LL+tZhj/HkmJ8P1OFuE1PK5wa6927hd1w3iIxTCoZyQZQMsths4b/AFVtbBmPtNFidrLRcNRyYdj9VSOblhqGGRo6Oaf1B9Erlc8fZXCYXcdYUqdRZKLZMFEUBAEwQRCAKYJQmCAYJ0gTJk0wCcBKE4ULFMEAEwCCEBEKAJgEyQI2UCITCLW8SAnh/EQP8tIf+K2aoxGklq8LrIYmF5kgkaANyS07J49i+4r4aijwnh2OptmfIzNf5Bauq4g4ka1zo+yghLvxuawEeF910XDMT5uHqNkgLT2QBFtQqK7hHDat7XTMldIx+ZrnSONtu/Uac1sTZYBVzVeGtdVSMlk3MgGW/kuZ4vxGeSSLDqOWRtRIL2YLAjqTsAutosPioacwxAZQL2Gi5vF8OZLVQV0T3RzwGzHDlrslKenJU5xNsrRT4pDVBhBkjbJmyg/PyXUSQt/tHC5iLPLJQdD7o+qSn4epWmd4iyvmIc7KTvyt0WTipmjqsKkZC+QML2vDRrq21yfHmnb/ABOqzrI2Qje2SNr4yHMcAQ4G4IKJWCkUUUugCoELqAoBkwShG6AdG6rDkboDWhOEoTBSowTDZBEbIIwTBAWRsmQohQIpgFscIMMTpZ5WAuawtBtqL258lr1dTPax5DxeN4yvHcnOzjZ4abNfcBpDyCAdtdllVj2xwl9rvGgHVc9hmIAYjiUOcOEc+a992loN/jdZuL1FT2dO3D2do+R+rhrlFt1qjXsKqtqaSQsMMJaWXL3zAEu90BcnjNbWVDpYYqMxzxzxAOY/dtyXZm8v/FuZcPa+pNRU08z5G/xZttb7DT5rSV2HTGtfiFPBM2c/kgeHB3iD9QiRpr9upoml0bQ4AHYrVcZYgcOkwuGIAmefKbOsQLhW8P184oJHYnH2UsYB2sCDZY1XMzEeJC0sie2mg/E7UtJdfTv03T9SJl/Nbg8EtPhdNDPfOxliDu3Um3kCFlonqEFhs7d1ECigUiBG6BKF0A2ZAuSEoZkjWBybMqMyOZA0qATAIIoMwCNtEAmCCEJghZMEyRFRRASynJRRMOcx2mnoq4YnRxmSN7MlTE3nbZy63h2rjmoInwyiRjm3bbkEtCA6YtI3aRqucx3CMRweb7bw+5wjNy6nA0HWy1x9xN9O2rYZJ6dzGPLHWOXxstTQwTU4tLOZSRrcAea4MftCro2uZPEWvG4t+ippeN6904EUXaOJ0FtyVfhU/cnTruNKkUOHseZcrM3tMaPxHkqOHaWSKkdPVNLamocXvB3A5D4WV+A4TLXU32/Gy6SqJL2Ru2i8lntGijO+tKxRRFBZVWwQsoSokClKnOyrckoCUhco4qslAPmS5u9VuKrzFAZoTBAIhAFMEAmsghCIQCITLQqKXWuxXHMPwlhNZOA+2kTfae7y+tk5N3UK2TtsVrMaxulwmPLIe0qnaR07T7TidBfoP61XHYvxpV1YdHQk0kRFsw1k+PLy+K5lr3GYyZy6QkOzuNyXDvXow4L3kxy55+nuGCU1dE0SYk+J077nJE2zWd3f4rayx57kWt4LW8O4lFjGFQV0RaXOFpG31Y/mCtq52iNaXv057G+F6DEQHuY1j/eAF1MAwGlw6N1g2/XKFn19S6maTGwyHkLqCQywNsMrnbhPdGmZRtuDp/2uN4jxn+72KxxStM9NOwmzbB8ZB5dR4rtY5Y6emdLMcjGDVxOi8Z40xZmLYxJPB+5aOzjvz6lGOHlUZZ+Md5heM0OKMBo5w5/ON2jx5LOK8ZiIZYhzw4bEaW8F0WF8X1tGGx1BNXEP4hs8f6ufmln9Pf8AIx599vQ0VrMK4gw7E2tEM2SU7xSWDh9fJbNeeyzttLL0BSPCclVuKlUVuCpc4hWvKx5ChUI8pLokpUjbFqcJAmCaTBEIBMgCsPE8To8Lp+2rZhG38o3c49AOavqpmU1NLPKbMiaXu8ALryHEKqfEq2Wpnc5zpHEjMb5R0HctuHi8+2PLyeHTb4xxdiVfLIKOV9LTbNbHo8jvdv8ACy593aOJfJmLjqXONyUpaRfdBe3HGYzUeO5W9oiA612gnXkgpr/RVJbnAcercDqu3pH5Wn95E++STxH6r0Gh/aNhM8f+OhqaV/PKztG+mvovJTruT8VASNiQpuEq5nY9Xl4twWYuca5zWX0Jhkv8Mqxp+PMJpIw2jZVVMm3tMyN9Tf0XmOd3vlAknckqftYqvNk6bHeLsQxdnZSyCKAG4gj2J/mPNc+S9xuQ7TqqBfkLKxl+vqtJJEW77Nc81Lk7AlQi6Q6JpPrfVpuF13D3E8lIxsFZmmgGgdu5n18Fx1uZv8Vl0wMb42v07QiynLCZT2rHK4309bpqmGriEtNIJGHmPkrCuU4MlMbnwuJDJnEtHR3L9V1jlz+XDwy09/Hn5zamRY8gWQ9Y8iyaRQ8qu6aQqklBtyNkUAjZMjBMN0oR3QTn+OqrsMCdEDZ1Q9rB4bn0FvNedseLOLmjQrpuP6rtcSjpWvGWBlyL/mdr8rfFcnexeL6nVdDgx1g8PNlvNY6xkdYW05JLWOouro2hzr33Cj4xa+Zp8CtmKk5fc9UvgLJ3BANv+Zo8UArbX1F/FE5fdCcttzB8FWUAtkRbm26YNHvN+KBFuYPggIC33PVHZAam3NHL/O34oC1pbbVoKDgDoG2Qj3tcFZcUQdzt4oCmOEvkYwDVxAVlTI04m5oaMkRDR5WWzw6lArI3uc2wvbXnZailHa4icwvmeT/XwQHTYbPkrm9l7IbK1o/2ud9F3YcHsa8bOF15rTSt+1Ne1wGaoe/ybHb5r0Kkfelb3aLzfVT8ZXp+nurYd5CxpSrZHLHlPeF4XtiiQi6qLh0RkdY7qkvF0lOgRUUTQgTAXsEAVTXT/ZqKec6CONzvgFUm6VunlONVJq8VrKgnV8zrW6A2HoAtcXWdfornXdqee6rc923RdSTUcy3d2spz1VxCxqd7u1s4rJzWN0yI8JCFf2jrb3VbtUAiBR9pp9k2KBkdbdAKDqjuhunYSNkAiisc53XdV2QFke62VKNQsGJztLHRbKlJJAKDbJhbE1jyQ0tdmBJsFoJWmjrqm24d9335tR+nqt1VTtZQz5gDljcRcdy5oVktQ+JmYksYI2G3LqgVnUJLqmNjdRmEbT3A5nn0svRsOkJpzfqvP8Mbml7QEhoIhj8z7R9F3NA7LG7xWfNN8dacN1nGXI9Ysrk8sm6xJXrlR04V7lSXaoPkIVJldfdUHYqWRUTZgtPxe9zOHavKbZsrT4FwB+aiirj+UTn8a81cwaWuseT8ZQUXTc2oxoLrrIA9gkkoKJguY3srWsDm3N1FEAsjAG3G6x76oKIC5rARc3RcA0iyiiAgFzqmDB3qKIB42gO0WwpwiogKMWJNC4ZjqQD8VpaU2ilePxAAA+JsiogOmweNpNCOVnv89vkusoB90/wUUSz+NVh8oWUm5WO8KKLjx1mJKLahUkm6iioP/9k="
            alt=""
          />
          <h4 className="text-lg font-medium">Harsh Patel</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Rs 295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className="text-3xl mb-3 font-thin ri-timer-2-line"></i>
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-3 font-thin ri-speed-up-line"></i>
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-3 font-thin ri-booklet-line"></i>
          <h2 className="text-lg font-medium">10.2</h2>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
