import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useDeleteBooking() {
  const query = useQueryClient()

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`Booking succesfully deleted`)
      query.invalidateQueries({ queryKey: ["bookings"] })
    },
    retry: false,
    onError: () => toast.error("There was an error while deleting a booking"),
  })

  return { deleteBooking, isDeleting }
}
