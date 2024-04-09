import React from 'react'
import ComingSoon from '../CountDown/Countdown'
import CountDown from '../CountDown/Countdown'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
function ComingSoonVersion1() {
    const specificEndDate = new Date('2024-12-31T23:59:59');

  return (
    <>
        <section className="flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
            <Header />
            <CountDown endDate={specificEndDate} />
            <SubscribeForm />
            <Footer />
        </section>
    </>
  )
}

export default ComingSoonVersion1