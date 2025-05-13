<script>
import Eventservices from '../../services/Eventservices';
import FlightContent from '../Flights/components/FlightMain/components/flightContent.vue';
import BookingBody from './components/BookingBody.vue';
import BookingHeader from './components/BookingHeader.vue';
export default {
  components: {
    BookingHeader,
    FlightContent,
    BookingBody
  },
  methods: {
    // FOR API CALL (MOCK)
    getBookingValue() {
      Eventservices.GetBookingValue()
        .then((response) => {
          if (response.data.status == "S") {
            this.flightdata = response.data.flightdata
            this.tableData = response.data.tableData

          } else {
            this.MessageBar("E", response.data.errMsg);
          }
        })
        .catch((errMsg) => {
          this.MessageBar("E", errMsg);
        });
    }
  },
  mounted() {
    this.getBookingValue()
  },
  data() {
    return {
      flightdata: [
      ],
      tableData: [
        {
          passenger: 'Janet Adebayo (32 F)',
          bookingDate: '12 Aug 2022 - 12:25 am',
          class: 'Economy',
          bookingRef: '9348fj73',
          seat: '23 A',
          addOns: '23Kg baggage extra. Meal(Jan + 1 + 2 more)',
          status: 'Pending',
        },

      ],
    }
  }
}
</script>

<template>
  <div>
    <BookingHeader />
    <FlightContent :flightdata="flightdata" />
    <BookingBody :tableData="tableData" />

  </div>
</template>
