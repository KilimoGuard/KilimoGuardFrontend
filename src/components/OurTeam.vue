<template>
  <section id="team" class="team">
    <div class="container mx-auto pt-6">
      <div class="section-header text-center mb-12">
        <h2 class="text-4xl mb-4 relative text-center">
          Our Team
          <span
              class="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-[#008374] mt-4"></span>
        </h2>
        <p class="mt-8 text-lg text-gray-600">Meet the talented individuals behind our pest prediction system</p>
      </div>

<!--      <div class="flex flex-wrap justify-center">-->
<!--        <div class="team-member w-full sm:w-1/2 lg:w-1/4 flex flex-row items-center">-->
<!--          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">-->
<!--            <img src="@/assets/img/team/mike.jpeg" alt="Michael Khanda" class="w-full h-80 object-fill mb-4">-->
<!--            <h4 class="text-xl font-bold mb-2">Michael Khanda</h4>-->
<!--            <span class="text-gray-600">Data Scientist</span>-->
<!--            <div class="social flex justify-center mt-4 space-x-10">-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-twitter"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-facebook"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-instagram"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-linkedin"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="team-member w-full sm:w-1/2 lg:w-1/4 flex flex-row items-center">-->
<!--          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">-->
<!--            <img src="@/assets/img/team/neema.jpeg" alt="Neema Mkenda" class="w-full h-80 object-cover mb-4">-->
<!--            <h4 class="text-xl font-bold mb-2">Neema Mkenda</h4>-->
<!--            <span class="text-gray-600">Software Engineer</span>-->
<!--            <div class="social flex justify-center mt-4 space-x-10">-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-twitter"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-facebook"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-instagram"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-linkedin"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="team-member w-full sm:w-1/2 lg:w-1/4 flex flex-row items-center">-->
<!--          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">-->
<!--            <img src="@/assets/img/team/peter.jpeg" alt="Peter Mirithu" class="w-full h-80 object-cover mb-4">-->
<!--            <h4 class="text-xl font-bold mb-2">Peter Mirithu</h4>-->
<!--            <span class="text-gray-600">AI Engineer</span>-->
<!--            <div class="social flex justify-center mt-4 space-x-10">-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-twitter"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-facebook"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-instagram"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-linkedin"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="team-member w-full sm:w-1/2 lg:w-1/4 flex flex-row items-center">-->
<!--          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">-->
<!--            <img src="@/assets/img/team/Keegan.jpg" alt="Keegan Mboya" class="w-full h-80 object-cover mb-4">-->
<!--            <h4 class="text-xl font-bold mb-2">Keegan Mboya</h4>-->
<!--            <span class="text-gray-600">Business Development Lead</span>-->
<!--            <div class="social flex justify-center mt-4 space-x-10">-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-twitter"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-facebook"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-instagram"></i>-->
<!--              </a>-->
<!--              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">-->
<!--                <i class="bi bi-linkedin"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">
            <img src="@/assets/img/team/mike.jpeg" alt="Michael Khanda" class="w-full h-80 object-cover mb-4">
            <h4 class="text-xl font-bold mb-2">Michael Khanda</h4>
            <span class="text-gray-600">Data Scientist</span>
            <div class="social flex justify-center mt-4 space-x-4">
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">
            <img src="@/assets/img/team/neema.jpeg" alt="Neema Mkenda" class="w-full h-80 object-cover mb-4">
            <h4 class="text-xl font-bold mb-2">Neema Mkenda</h4>
            <span class="text-gray-600">Software Engineer</span>
            <div class="social flex justify-center mt-4 space-x-4">
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">
            <img src="@/assets/img/team/peter.jpeg" alt="Peter Mirithu" class="w-full h-80 object-cover mb-4">
            <h4 class="text-xl font-bold mb-2">Peter Mirithu</h4>
            <span class="text-gray-600">AI Engineer</span>
            <div class="social flex justify-center mt-4 space-x-4">
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="member bg-white rounded-lg shadow-lg overflow-hidden text-center p-4">
            <img src="@/assets/img/team/Keegan.jpg" alt="Keegan Mboya" class="w-full h-80 object-cover mb-4">
            <h4 class="text-xl font-bold mb-2">Keegan Mboya</h4>
            <span class="text-gray-600">Business Development Lead</span>
            <div class="social flex justify-center mt-4 space-x-4">
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors text-lg">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
}
</script>

<style scoped>
.team-member {
  margin-top: 10px;
}

.team .member {
  text-align: center;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
}

.team .member img {
  border-radius: 10px;
  overflow: hidden;
}

.team .member h4 {
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 2px;
  font-size: 20px;
}

.team .member span {
  font-style: italic;
  display: block;
  font-size: 14px;
  color: #6c757d;
}

.team .member .social {
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team .member .social a {
  color: #a2a2a2;
  transition: 0.3s;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bbbbbb;
}

.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
</style>
