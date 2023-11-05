"use client";

import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter()

  const handleBackToProject = () => {
    router.back();
  }

  return (
    <div className="page2">
      <div className="content">
        <div style={{ marginTop: 100 }}>
          <div>
            <a href="#" onClick={handleBackToProject}>
              <img  src="/images/user_url.jpg" />
            </a>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
              <img  src="/images/user_info.jpg" />
            </div>
            <div>
              <div>
                <img  src="/images/user_info2.jpg" />
              </div>
              <div>
                <img  src="/images/user_info3.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}