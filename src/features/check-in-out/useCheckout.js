import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useCheckout() {
  const query = useQueryClient()

  const { mutate: checkout, isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} succesfully checked out`)
      query.invalidateQueries({ active: true })
    },
    onError: () => toast.error("There was an error while checking out"),
  })

  return { checkout, isCheckingOut }
}
